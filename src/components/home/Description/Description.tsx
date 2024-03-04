import styles from './Description.module.sass'
import Image from  'next/image'


export const Description = () => {
    return(
        <section>
            <Image src="/images/description.jpeg" alt="products" 
            width={500} 
            height={300}
            priority= {false}
            quality={100}
            />

            <div className={styles.Description__text}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis inventore assumenda similique perferendis magni excepturi voluptate, natus recusandae delectus quia, accusantium aliquam doloribus ullam repellat dolorem distinctio asperiores eligendi. Repudiandae?</p>
            </div>
        </section>
    )
}