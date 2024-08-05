"use client";
import styles from './productdetails.module.css';
import { FaChevronDown } from 'react-icons/fa';
import React, { useState } from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { products } from '@/app/data';

const ProductPage = () => {
    const url = window.location.href;
    const parts = url.split('/');
    const productId = parts[parts.length - 1];

    const product = products.find((product) => product.id === productId);

  const [language, setLanguage] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const translations = {
    en: {
      language: 'Language',
      home: 'Home',
      products: 'Products',
      navSearch: "What are you looking for?",
    },
    ned: {
      language: 'Taal',
      home: 'Home',
      products: 'Producten',
      navSearch: "Waar bent u naar op zoek?",
    },
  };

  const translate = (key) => {
    return translations[language][key] || key;
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <Router>
      <div className={styles.header}>
      <div className={classNames(styles.navBar, styles.padding)}>
        <div className={styles.navLogo}>
          <h2><span>Computer</span> Shop</h2>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>{translate('home')}</li>
            <li className={styles.active}>{translate('products')}</li>
            <div className={styles.languageSelector} onClick={toggleDropdown}>
              <li>{translate('language')}</li>
              <FaChevronDown className={classNames(styles.arrowDown, { [styles.open]: dropdownOpen })} />
              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem} onClick={() => selectLanguage('en')}>English</div>
                  <div className={styles.dropdownItem} onClick={() => selectLanguage('ned')}>Nederlands</div>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className={styles.navActions}>
            <div className={styles.boxSearch}>
                <div className={`${styles.navSearch} ${isFocused ? styles.active : ''}`}>
                    <input type="text" placeholder={translate('navSearch')} id="searchInput" onFocus={handleFocus} onBlur={handleBlur} />
                    <img src="/searchNav.svg" />
                </div>
            </div>
            <div className={styles.navIcons}>
                <img src="/heart.svg" />
                <img src="/cart.svg" />
                <img src="/user.svg" />
            </div>
        </div>
      </div>
      <div className={styles.viewport}>
        <div className={classNames(styles.breadCrumb, styles.padding)}>
          <Link className={styles.Link}>{translate('products')}</Link>
          <p className={styles.seperator}>/</p>
          <Link className={styles.Link}>{product.laptopOrDesktop}</Link>
          <p className={styles.seperator}>/</p>
          <Link className={styles.Link}>{product.category}</Link>
          <p className={styles.seperator}>/</p>
          <h4>{product.name}</h4>
        </div>
        <div className={styles.product}>
          <div className={classNames(styles.mobileTitle, styles.padding)}>
            <h2>{product.name}</h2>
          </div>
          <div className={styles.productHead}>
          <div className={classNames(styles.productImages, styles.padding)}>
            <div className={classNames(styles.smallImages)}>
              <div className={classNames(styles.smallImage, styles.active)}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.smallImage}>
                <img src={product.smImg1} alt={product.name} />
              </div>
              <div className={styles.smallImage}>
                <img src={product.smImg2} alt={product.name} />
              </div>
              <div className={styles.smallImage}>
                <img src={product.smImg3} alt={product.name} />
              </div>
            </div>
            <div className={classNames(styles.mainImage)}>
              <img src="/previous.svg" className={styles.previous} />
              <img src={product.image} className={styles.imgMain} />
              <img src="/next.svg" className={styles.next} />
            </div>
          </div>
          <div className={styles.productInfo}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.reviews}>
              <div className={styles.starsAndCount}>
                <div className={styles.stars}>
                  <img src={product.star1} />
                  <img src={product.star2} />
                  <img src={product.star3} />
                  <img src={product.star4} />
                  <img src={product.star5} />
                </div>
                <p>({product.reviewsCount})</p>
              </div>
              <div className={styles.availability}>
                <div className={styles.line}></div>
                <h4 className={styles?.[product.inStockOrOutOfStockClassName]}>{product[language]?.inStockOrOutOfStock}</h4>
              </div>
            </div>
            <div className={styles.price}>
              <h2 className={styles.newPrice}>{product.newPrice}</h2>
              <h2 className={styles.oldPrice}>{product.oldPrice}</h2>
            </div>
            <div className={styles.description}>
              <p>{product[language]?.description}</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.configuration}>
              <div className={styles.configurationItem}>
                <p>Choose your storage</p>
                <div className={styles.options}>
                  {product.storageOptions.map((option) => {
                    return (
                        <div className={styles.option}>
                            <h2>{option}</h2>
                        </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.configurationItem}>
                <p>Choose your memory</p>
                <div className={styles.options}>
                  {product.memoryOptions.map((option) => {
                    return (
                        <div className={styles.option}>
                            <h2>{option}</h2>
                        </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.configurationItem}>
                <p>Choose your processor</p>
                <div className={styles.options}>
                  {product.processorOptions.map((option) => {
                    return (
                        <div className={styles.option}>
                            <h2>{option}</h2>
                        </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.configurationItem}>
                <p>Choose your GPU</p>
                <div className={styles.options}>
                  {product.gpuOptions.map((option) => {
                    return (
                        <div className={styles.option}>
                            <h2>{option}</h2>
                        </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles.productInfoActions}>
              <div className={styles.countDiv}>
                <div className={styles.decrease}>
                  <img src="/decrease.svg" />
                </div>
                <div className={styles.count}>
                  <h3>1</h3>
                </div>
                <div className={styles.increase}>
                  <img src="/increase.svg" />
                </div>
              </div>
              <div className={styles.BuyAndLike}>
                <div className={styles.buy}>
                  <h2>Buy</h2>
                </div>
                <div className={styles.like}>
                  <img src="/wishlist.svg" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.icon}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.active}>
            <path d="M9.9199 2.84L4.5299 7.04C3.6299 7.74 2.8999 9.23 2.8999 10.36V17.77C2.8999 20.09 4.7899 21.99 7.1099 21.99H18.6899C21.0099 21.99 22.8999 20.09 22.8999 17.78V10.5C22.8999 9.29 22.0899 7.74 21.0999 7.05L14.9199 2.72C13.5199 1.74 11.2699 1.79 9.9199 2.84Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.8999 17.99V14.99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Home</p>
        </div>
        <div className={styles.icon}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7 20C16.6705 20 20.7 15.9706 20.7 11C20.7 6.02944 16.6705 2 11.7 2C6.72939 2 2.69995 6.02944 2.69995 11C2.69995 15.9706 6.72939 20 11.7 20Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6299 20.6898C20.1599 22.2898 21.3699 22.4498 22.2999 21.0498C23.1499 19.7698 22.5899 18.7198 21.0499 18.7198C19.9099 18.7098 19.2699 19.5998 19.6299 20.6898Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Search</p>
        </div>
        <div className={classNames(styles.icon, styles.active)}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6349 12.73C18.2259 12.73 18.7049 12.2509 18.7049 11.66C18.7049 11.069 18.2259 10.59 17.6349 10.59C17.044 10.59 16.5649 11.069 16.5649 11.66C16.5649 12.2509 17.044 12.73 17.6349 12.73Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.625 6V7.78998C20.375 7.75998 20.085 7.73999 19.775 7.73999H15.495C13.355 7.73999 12.645 8.45003 12.645 10.59V15.7H6.625C3.425 15.7 2.625 14.9 2.625 11.7V6C2.625 2.8 3.425 2 6.625 2H16.625C19.825 2 20.625 2.8 20.625 6Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.625 15.7V20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.625 11.9H12.625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.57495 20H12.6249" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.6349 12.73C18.2259 12.73 18.7049 12.2509 18.7049 11.66C18.7049 11.069 18.2259 10.59 17.6349 10.59C17.044 10.59 16.5649 11.069 16.5649 11.66C16.5649 12.2509 17.044 12.73 17.6349 12.73Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.625 7.78998C20.375 7.75998 20.085 7.73999 19.775 7.73999H15.495C13.355 7.73999 12.645 8.45003 12.645 10.59V19.15C12.645 21.29 13.355 22 15.495 22H19.775C21.915 22 22.625 21.29 22.625 19.15V10.59C22.625 8.76003 22.105 7.97998 20.625 7.78998ZM17.635 10.59C18.225 10.59 18.705 11.07 18.705 11.66C18.705 12.25 18.225 12.73 17.635 12.73C17.045 12.73 16.565 12.25 16.565 11.66C16.565 11.07 17.045 10.59 17.635 10.59ZM17.635 19.15C16.455 19.15 15.495 18.19 15.495 17.01C15.495 16.52 15.665 16.06 15.945 15.7C16.335 15.2 16.945 14.87 17.635 14.87C18.175 14.87 18.665 15.07 19.035 15.39C19.485 15.79 19.775 16.37 19.775 17.01C19.775 18.19 18.815 19.15 17.635 19.15Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.7751 17.01C19.7751 18.19 18.8151 19.15 17.6351 19.15C16.4551 19.15 15.4951 18.19 15.4951 17.01C15.4951 16.52 15.6651 16.06 15.9451 15.7C16.3351 15.2 16.9451 14.87 17.6351 14.87C18.1751 14.87 18.6651 15.07 19.0351 15.39C19.4851 15.79 19.7751 16.37 19.7751 17.01Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.6349 12.73C18.2259 12.73 18.7049 12.2509 18.7049 11.66C18.7049 11.069 18.2259 10.59 17.6349 10.59C17.044 10.59 16.5649 11.069 16.5649 11.66C16.5649 12.2509 17.044 12.73 17.6349 12.73Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Products</p>
        </div>
        <div className={styles.icon}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.2998 2H4.03981C5.11981 2 5.96981 2.93 5.87981 4L5.0498 13.96C4.9098 15.59 6.1998 16.99 7.8398 16.99H18.4898C19.9298 16.99 21.1898 15.81 21.2998 14.38L21.8398 6.88C21.9598 5.22 20.6998 3.87 19.0298 3.87H6.11981" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5498 22C17.2402 22 17.7998 21.4404 17.7998 20.75C17.7998 20.0596 17.2402 19.5 16.5498 19.5C15.8594 19.5 15.2998 20.0596 15.2998 20.75C15.2998 21.4404 15.8594 22 16.5498 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5498 22C9.24016 22 9.7998 21.4404 9.7998 20.75C9.7998 20.0596 9.24016 19.5 8.5498 19.5C7.85945 19.5 7.2998 20.0596 7.2998 20.75C7.2998 21.4404 7.85945 22 8.5498 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.2998 8H21.2998" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Cart</p>
        </div>
        <div className={styles.icon}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0999 12C14.8613 12 17.0999 9.76142 17.0999 7C17.0999 4.23858 14.8613 2 12.0999 2C9.33843 2 7.09985 4.23858 7.09985 7C7.09985 9.76142 9.33843 12 12.0999 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.6898 22C20.6898 18.13 16.8398 15 12.0998 15C7.35976 15 3.50977 18.13 3.50977 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Profile</p>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default ProductPage;