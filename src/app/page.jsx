"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import { translations } from '../../public/translations';
import { Link } from 'react-router-dom';
import { products } from './data';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const translate = (key) => {
    return translations[language][key];
  }
  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  }
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  const handleLinkClick = (path) => {
    window.location.href = path;
  }
  return (
            <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            <h1><span>Computer</span> Shop</h1>
                        </div>
                        <ul className={styles.links}>
                            <li className={styles.activeli}>{translate('home')}</li>
                            <li>{translate('laptops')}</li>
                            <li>{translate('desktops')}</li>
                            <li>{translate('account')}</li>
                        </ul>
                        <div className={styles.navActions}>
                            <div className={styles.navSearch}></div>
                            <div className={styles.navIcons}>
                                <div className={styles.languageSelector} onClick={toggleDropdown}>
                                    <img className={styles.worldIcon} src='/language.svg' />
                                    <FaChevronDown className={classNames(styles.arrowDown, { [styles.open]: dropdownOpen })} />
                                    {dropdownOpen && (
                                      <div className={styles.dropdownMenu}>
                                        <div className={styles.dropdownItem} onClick={() => selectLanguage('en')}>English</div>
                                        <div className={styles.dropdownItem} onClick={() => selectLanguage('ned')}>Nederlands</div>
                                      </div>
                                    )}
                                </div>
                                <img src='/cart.svg' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.colHalf}>
                            <h1 className={styles.heading}>{translate('title1')}<br /> {translate('title2')}</h1>
                            <p>Verken nieuwe technologieën en verbluffende prestaties. Bij ons vind je de nieuwste generatie computers voor gaming, werk en meer. Duik in een wereld van kracht, snelheid en stijl.</p>
                            <a href="http://localhost:3000/product" className={styles.btn}>{translate('explore')}</a>
                        </div>
                        <div className={styles.colHalf}>
                            <img className={styles.topImg} src="/image2.webp" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.smallContainer}>
                <div className={styles.titleAndArrows}>
                    <h2 className={styles.title}>{translate('ourLaptopsForWork')}</h2>
                    <div className={styles.arrows}>
                    <img src="/previous-sm.svg" />
                    <img src="/next-sm.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.smallContainer}>
                <div className={styles.titleAndArrows}>
                    <h2 className={styles.title}>{translate('ourLaptopsForGaming')}</h2>
                    <div className={styles.arrows}>
                    <img src="/previous-sm.svg" />
                    <img src="/next-sm.svg" />
                    </div>
                </div>
                <div className={styles.horizontalScroll}>
                        {products.map((product) => {
                            return (
                                <div className={styles.productCard} key={product.id} onClick={() => handleLinkClick(`/products/${product.id}`)}>
                                    <img src={product.image} className={styles.productImg} alt={product.name} />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productPrice}>
                                            <h2>{product.newPrice}</h2>
                                            <h3>{product.oldPrice}</h3>
                                        </div>
                                        <h2 className={styles.productTitle}>{product.name}</h2>
                                        <div className={styles.productReviews}>
                                            <div className={styles.stars}>
                                                <img src={product.star1} />
                                                <img src={product.star2} />
                                                <img src={product.star3} />
                                                <img src={product.star4} />
                                                <img src={product.star5} />
                                            </div>
                                            <p className={styles.reviewsCount}>({product.reviewsCount})</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className={styles.offer}>
                <div className={styles.offersmallContainer}>
                  <div className={styles.offerRow}>
                  <div className={styles.col2}>
                    <img src="/offer.png" className={styles.offerImg}/>
                  </div>
                  <div className={styles.col2}>
                    <p>{translate('offerP')}</p>
                    <h1>Galaxy Book 3 Ultra</h1>
                    <small>{translate('offerSmall')}</small>
                    <br/><a href="" className={styles.btn}>{translate('offerCTA')} &#8594;</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default App;