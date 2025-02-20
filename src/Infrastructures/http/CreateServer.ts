import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { json, urlencoded } from 'express';
import cors from 'cors';
import  dbHandler  from '../database/postgre/postgresql';
import platform from '../../Interfaces/http/api/platform'
import status from '../../Interfaces/http/api/status'
import post from '../../Interfaces/http/api/post'
import DomainErrorTranslator from '../../Commons/exceptions/DomaintTranslatorError';
import ClientError from '../../Commons/exceptions/ClientError';
import Swagger from '../../config/Swagger';

const createServer = async () => {
    const app = express();

    // Middleware untuk JWT
    app.use(json());
    app.use(cors());
    app.use(urlencoded({ extended: true }));
    Swagger(app);
    const errorHandler: ErrorRequestHandler = (err, req, res, next): any => {
      // Menggunakan DomainErrorTranslator untuk mengubah error
      if (res.headersSent) {
        // Jika response sudah dikirim, lanjutkan ke middleware berikutnya untuk menghindari error
        return next(err);
      }
      console.log(err);
      const translatedError = DomainErrorTranslator.translate(err);
    
      if (translatedError instanceof ClientError) {
        return res.status(400).json({
          status: "fail",
          message: translatedError.message,
        });
      }
    
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    };
    
    // Gunakan middleware ini di Express
    dbHandler.sequelizeInternalDB
    .sync({ alter: true })
    .then(() =>
      console.log('Connection to DB has been established successfully.')
    )
    .catch((err: any) =>
      console.error('Unable to connect to the database:', err)
    );

    app.use('/platform', platform);
    app.use('/status', status);
    app.use('/post', post);
    app.use(errorHandler);
    return app;
};
export default createServer;