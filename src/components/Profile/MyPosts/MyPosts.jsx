import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea name="" id="" cols="20" rows="3"></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>

        <div className={s.posts}>
          <Post messages='Hi' likesCount="0" />
          <Post messages='Hello' likesCount="20"/>
          <Post messages='Good morning' likesCount="5"/>
        </div>

      </div>
  );
}

export default MyPosts;