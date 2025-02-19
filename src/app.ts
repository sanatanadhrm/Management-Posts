require('dotenv').config()
import createServer from './Infrastructures/http/CreateServer';

(async () => {
    const app = await createServer();
    
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
})();
