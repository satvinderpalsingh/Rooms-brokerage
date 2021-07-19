import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi"
import * as FcIcons from "react-icons/fc"

export const SidebarData = [

  {
    title: 'My Ads',
    path: '/Ownerdashboard',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'       //nav-text-mobile for mobile only view
  }, 
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'About us',
    path: '/aboutus',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Map',
  //   path: '/map',
  //   icon: <BiIcons.BiMapPin />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Contact us',
    path: '/contactus',
    icon: <AiIcons.AiOutlineContacts />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Help And Faq',
  //   path: '/helpandfaq',
  //   icon: <BiIcons.BiHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'User Homepage',
  //   path: '/userpage',
  //   icon: <BiIcons.BiHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Add Details',
  //   path: '/addetails',
  //   icon: <BiIcons.BiHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Wishlist',
  //   path: '/wishlist',
  //   icon: <BiIcons.BiHelpCircle />,
  //   cName: 'nav-text'
  // }


]
