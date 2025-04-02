import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Gallery from './Gallery.jsx'
import Profile from './Profile.jsx'
// import UserAge , {UserName}  from './UserComponents.jsx'

import UserName from './UserName.jsx'
import UserAge from './UserAge.jsx'
import Fruits from './Fruits.jsx'
import WebsiteLink from './WebsiteLink .jsx'
import Blog from './Blog.jsx'
import TodayDate from './TodayDate.jsx'
import RandomQuote from './RandomQuote.jsx'
import MathResult from './MathResult.jsx'
import Paragraph from './Paragraph.jsx'
import Product from './Product.jsx'
import Movie from './Movie.jsx'
import Button from './Button.jsx'
import UserProfile from './UserProfile.jsx'
import Modal from './Modal.jsx'
import UserStatus from './UserStatus.jsx'
import AgeCheck from './AgeCheck.jsx'
import Loading from './Loading.jsx'
import Notification from './Notification.jsx'
import Feedback from './Feedback.jsx'
import ArrayToList from './ArrayToList.jsx'
import TodoList from './TodoList.jsx'
import ProductList from './ProductList.jsx'
import UserList from './UserList.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import Pure from './Pure.jsx'

import Impure from './Impure.jsx'
import Clock from './Clock.jsx'
import Counter from './Counter'
import ProfilePic from './ProfilePic.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfilePic userid={1} />
    <ProfilePic userid={2} />
    <ProfilePic userid={3} />
  </StrictMode>
)
