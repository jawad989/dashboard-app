import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Button = ({ icon, content }) => {
  return (
    <button className={styles.button}>
      {icon}
      {content}
    </button>
  )
}

const Card = ({ notification, subtitle, title, idx }) => {
  return (
    <div className={styles.item}>
      <div className={styles.bgContainer}>
        <Image src='/astronaut.png' alt="" fill className={styles.bg}/>
      </div>

      <div className={styles.text}>
        <span className={styles.notification}>{notification}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{subtitle}</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque
          consequuntur perferendis? Voluptates eaque cumque ea, doloribus
          dignissimos soluta impedit.
        </p>
        {idx === 1 ? (
          <Button icon={<MdPlayCircleFilled />} content='Watch' />
        ) : (
          <Button icon={<MdReadMore />} content='Learn' />
        )}
      </div>
    </div>
  )
}

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <Card
        notification='🔥 Available Now'
        subtitle='Takes 4 minutes to learn'
        title='How to use the new version of the admin dashboard?'
        idx={1}
        key={1}
      />
      <Card
        notification='🚀 Coming Soon'
        subtitle='Boost your productivity'
        title='New server actions are available, partial pre-rendering is coming up!'
        idx={undefined}
        key={2}
      />
    </div>
  )
}
export default Rightbar
