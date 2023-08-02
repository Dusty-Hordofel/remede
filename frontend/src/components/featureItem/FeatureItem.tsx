import React from 'react'
import styles from './featureItem.module.scss'

interface FeatureItemProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    title: string
    description: string

}

const FeatureItem = ({ src, title, description, alt }: FeatureItemProps) => {
    return (
        <div className={styles.feature}>
            <img src={src} alt={alt} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default FeatureItem