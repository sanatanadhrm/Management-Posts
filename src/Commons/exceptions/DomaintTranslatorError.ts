import ClientError from './ClientError';
import InvariantError from './InvariantError';
import NotFountError from './NotFoundError';

interface ErrorTranslator {
  [key: string]: ClientError;
}

class DomainErrorTranslator {
  static directories: ErrorTranslator = {
    'ADDED_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat platform baru karena properti yang dibutuhkan tidak ada'),
    'ADDED_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat platform baru karena tipe data tidak sesuai'),
    'GET_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('harus menyertakan id, name, created_at, updated_at'),
    'GET_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('id harus number, name harus string, created_at harus date, updated_at harus date'),
    'ADD_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat platform baru karena properti yang dibutuhkan tidak ada'),
    'ADD_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat platform baru karena tipe data tidak sesuai'),
    'EDIT_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat memperbarui platform karena properti yang dibutuhkan tidak ada'),
    'PLATFORM_REPOSITORY.PLATFORM_IS_EXIST': new InvariantError('platform sudah ada'),
    'PLATFORM_REPOSITORY.PLATFORM_NOT_FOUND': new NotFountError('platform tidak ditemukan'),
    'PLATFORM_REPOSITORY.PLATFORM_FAILED_TO_UPDATE': new InvariantError('gagal memperbarui platform'),
    'PLATFORM_REPOSITORY.DELETE_PLATFORM_FAILED': new InvariantError('gagal menghapus platform'),
    'EDIT_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat memperbarui platform karena tipe data tidak sesuai'),
    'EDITED_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat memperbarui post karena properti yang dibutuhkan tidak ada'),
    'EDITED_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat memperbarui post karena tipe data tidak sesuai'),
    'POST_REPOSITORY.POST_NOT_FOUND': new NotFountError('post tidak ditemukan'),
    'POST_REPOSITORY.POST_FAILED_TO_UPDATE': new InvariantError('gagal memperbarui post'),
    'POST_REPOSITORY.DELETE_POST_FAILED': new InvariantError('gagal menghapus post'),
    'GET_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('harus menyertakan id, title, platform, status, payment, due_date, brand, created_at, updated_at'),
    'GET_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('id harus number, title harus string, platform harus string, status harus string, payment harus number, due_date harus date, brand harus string, created_at harus date, updated_at harus date'),
    'ADD_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat post baru karena properti yang dibutuhkan tidak ada'),
    'ADD_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat post baru karena tipe data tidak sesuai'),
    'POST_REPOSITORY.POST_IS_EXIST': new InvariantError('post sudah ada'),
    'ADDED_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat post baru karena properti yang dibutuhkan tidak ada'),
    'ADDED_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat post baru karena tipe data tidak sesuai'),
    'DELETE_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat menghapus post karena properti yang dibutuhkan tidak ada'),
    'DELETE_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat menghapus post karena tipe data tidak sesuai'),
    'DELETE_POST.POST_NOT_FOUND': new NotFountError('post tidak ditemukan'),
    'GET_POST_BY_ID.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('harus menyertakan id'),
    'GET_POST_BY_ID.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('id harus number'),
    'GET_POST_BY_ID.POST_NOT_FOUND': new NotFountError('post tidak ditemukan'),
    'GET_POST_BY_ID.POST_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('id harus number'),
    'STATUS_REPOSITORY.STATUS_NOT_FOUND': new NotFountError('status tidak ditemukan'),
    'STATUS_REPOSITORY.STATUS_FAILED_TO_UPDATE': new InvariantError('gagal memperbarui status'),
    'STATUS_REPOSITORY.DELETE_STATUS_FAILED': new InvariantError('gagal menghapus status'),
    'GET_STATUS.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('harus menyertakan id, name, created_at, updated_at'),
    'GET_STATUS.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('id harus number, name harus string, created_at harus date, updated_at harus date'),
    'EDIT_POST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat memperbarui post karena properti yang dibutuhkan tidak ada'),
    'EDIT_POST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat memperbarui post karena tipe data tidak sesuai'),
    'EDITED_STATUS.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat memperbarui status karena properti yang dibutuhkan tidak ada'),
    'EDITED_STATUS.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat memperbarui status karena tipe data tidak sesuai'),
    'DELETE_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat menghapus platform karena properti yang dibutuhkan tidak ada'),
    'DELETE_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat menghapus platform karena tipe data tidak sesuai'),

  };

  static translate(error: Error): ClientError | Error {
    return DomainErrorTranslator.directories[error.message] || error;
  }
}

export default DomainErrorTranslator;