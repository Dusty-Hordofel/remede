import React from 'react'
import FeatureItem from '../../components/featureItem/FeatureItem'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'
import styles from './home.module.scss'
const Home = () => {

    return (
        <>
            <div className={styles.features}>
                <FeatureItem src={chat} title="You are our #1 priority" description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
                <FeatureItem src={chat} title="You are our #1 priority" description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
                <FeatureItem src={chat} title="You are our #1 priority" description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
            </div>
        </>
    )
}

export default Home