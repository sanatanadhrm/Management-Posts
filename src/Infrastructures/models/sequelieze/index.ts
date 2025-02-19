import Post from './PostModel';
import Status from './StatusModel';
import Platforms from './PlatformModel';

Status.hasMany(Post, {
    foreignKey: 'status_id',
    as: 'posts',
});
Platforms.hasMany(Post, {
    foreignKey: 'platform_id',
    as: 'posts',
});
Post.belongsTo(Status, {
    foreignKey: 'status_id',
    as: 'post_status',
});
Post.belongsTo(Platforms, {
    foreignKey: 'platform_id',
    as: 'post_platform',
});
export {
    Post,
    Status,
    Platforms,
}