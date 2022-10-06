import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <img className={s.img} src="https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-49.jpg" alt=""/>
      <p>post</p>
      { props.messages }
      <br/>
      <span>like</span> { props.likesCount }

    </div>
  );
}

export default Post;