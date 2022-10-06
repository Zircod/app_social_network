import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    {id:1, message: "Hi", likesCount: 0},
    {id:1, message: "Hello", likesCount: 10},
    {id:1, message: "Good morning", likesCount: 5}
  ]

  return (
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea name="" id="" cols="20" rows="3"/>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>

        <div className={s.posts}>
          <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount} />
          <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount} />
          <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount} />
        </div>

      </div>
  );
}

export default MyPosts;