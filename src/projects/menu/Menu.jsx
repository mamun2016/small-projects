import './menu.scss';
import React, { useState } from  'react';
import { BiSearchAlt } from 'react-icons/bi';
import MenuData from './MenuData';
import SingleMenu from './SingleMenu';
import Categories from './Categories';

const allCategories = ['All', ...new Set(MenuData.map(cat => cat.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories] = useState(allCategories);
  const [priceSearchKey, setPriceSearchKey] = useState({
    minPrice: 0,
    maxPrice: 0
  })

  const filterItem = (category) => {
    if(category === 'All') {
      setMenuItems(MenuData);
      return;
    }

    const newCategory = MenuData.filter(filtered => filtered.category === category);
    setMenuItems(newCategory);
  }

  const onSearch = (e) => {
    const value = e.target.value;

    if (value !== '') {
      const filteredProducts = MenuData.filter(menu => {
        return Object.values(menu).join(' ').toLowerCase().includes(value.toLowerCase())
      })
      setMenuItems(filteredProducts);
    } else {
      return MenuData;
    }
  }

  const priceSearchResult = (e) => {
    const field = e.target.name;
    
    setPriceSearchKey(prevValue => {
      if(field === 'minPrice') {
        return {
          minPrice: e.target.value,
          maxPrice: prevValue.maxPrice
        }

      } else if (field === 'maxPrice') {
        return {
          minPrice: prevValue.minPrice,
          maxPrice: e.target.value
        }
      }
    })
  }

  const priceSearch = (e) => {
    e.preventDefault();
    const priceSearchItems = menuItems.filter(item => {
      if(item.price >= priceSearchKey.minPrice && item.price <= priceSearchKey.maxPrice) {
        return item;
      }
    });
    setMenuItems(priceSearchItems);
  }

  return (
    <div className="menu-main">
      <h2 className="title">
        <span>Our Food Menu</span>
      </h2>

      <div className="menu-holder">
        <Categories filterItem={filterItem} categories={categories} />

        <div className="menu-search">
          <div className="menu-search-input">
            <input type="text" autoFocus onChange={(e) => onSearch(e)} className="input-field" placeholder="Search items" />
            <button className="menu-search-btn"><BiSearchAlt /></button>
          </div>
          
          <form className="menu-search-range" onSubmit={priceSearch}>
            <input type="number" name="minPrice" onChange={(e) => priceSearchResult(e)} className="input-field" placeholder="Min price" />
          <input type="number" name="maxPrice" onChange={(e) => priceSearchResult(e)} className="input-field" placeholder="Max price" />
            <button className="button button-medium">Search</button>
          </form>          
        </div>

        <div className="menu">
          <SingleMenu items={menuItems} />
        </div>
      </div>
    </div>
  )
}

export default Menu;
