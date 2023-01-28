import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Weather from '@/components/weather'
import React, { useState, useEffect } from 'react'
import Company from '../../_json/company.json'
import { BsGoogle, BsYoutube, BsTwitter } from 'react-icons/bs'
import { FaWikipediaW, FaAmazon } from 'react-icons/fa'
import { SiFlipkart } from 'react-icons/si'

export default function Home() {
  const [searchURL, setSearchURL] = useState('')
  const [clicked, setClicked] = useState(false)
  const [Google, setGoogle] = useState(false)
  const [Youtube, setYoutube] = useState(false)
  const [Wikipedia, setWikipedia] = useState(false)
  const [Twitter, setTwitter] = useState(false)
  const [Amazon, setAmazon] = useState(false)
  const [Flipkart, setFlipkart] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: Event | any) => {
    e.preventDefault()
    location.href = searchURL + searchTerm
    console.log(location.href)
    setSearchTerm('')
  }
  // useEffect(()=>{
  //   const deg=Math.random()*90;
  //   var bg=document.querySelector(".Home_main__zgAJj");
  //   bg.style.background=`linear-gradient(${deg}deg,rgba(255, 174, 188, 0.85),rgba(255, 224, 230, 0.85),rgba(134, 255, 255, 0.85)),url("https://picsum.photos/1000/1500") no-repeat center center/ cover`;
  // },[]);

  useEffect(() => {
    var clock: any = document.querySelector('.Home_clock__WKEQI')
    setInterval(() => {
      clock.innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()}`
    }, 1000)
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Dynamic Search Starter" />
        <meta name="keywords" content="zorin, search system, ashish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/search.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.companies}>
          <div
            className={
              !Google
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(true)
              setYoutube(false)
              setWikipedia(false)
              setTwitter(false)
              setAmazon(false)
              setFlipkart(false)
              setSearchURL('https://www.google.com/search?q=')
            }}
          >
            <BsGoogle />{' '}
          </div>
          <div
            className={
              !Youtube
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(false)
              setYoutube(true)
              setWikipedia(false)
              setTwitter(false)
              setAmazon(false)
              setFlipkart(false)
              setSearchURL('https://www.youtube.com/results?search_query=')
            }}
          >
            <BsYoutube />{' '}
          </div>
          <div
            className={
              !Wikipedia
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(false)
              setYoutube(false)
              setWikipedia(true)
              setTwitter(false)
              setAmazon(false)
              setFlipkart(false)
              setSearchURL('https://en.wikipedia.org/wiki/')
            }}
          >
            <FaWikipediaW />{' '}
          </div>
          <div
            className={
              !Twitter
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(false)
              setYoutube(false)
              setWikipedia(false)
              setTwitter(true)
              setAmazon(false)
              setFlipkart(false)
              setSearchURL('https://twitter.com/search?q=')
            }}
          >
            <BsTwitter />{' '}
          </div>
          <div
            className={
              !Amazon
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(false)
              setYoutube(false)
              setWikipedia(false)
              setTwitter(false)
              setAmazon(true)
              setFlipkart(false)
              setSearchURL('https://www.amazon.com/s?k=')
            }}
          >
            <FaAmazon />{' '}
          </div>
          <div
            className={
              !Flipkart
                ? `${styles.company}`
                : `${styles.company} ${styles.expand}`
            }
            onClick={() => {
              setGoogle(false)
              setYoutube(false)
              setWikipedia(false)
              setTwitter(false)
              setAmazon(false)
              setFlipkart(true)
              setSearchURL('https://www.flipkart.com/search?q=')
            }}
          >
            <SiFlipkart />
          </div>
        </div>
        <div className={styles.first_block}>
          <div className={styles.clock}>7:35</div>
        </div>
        <div className={styles.second_block}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="search"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
            />
          </form>
          <Weather />
        </div>
        <div className={styles.footer}>
          <p>Made with ❤️</p>
          <p>Kumar Ashish Ranjan</p>
        </div>
      </main>
    </>
  )
}
