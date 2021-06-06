import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi"
import * as FcIcons from "react-icons/fc"

export const SidebarData = [

  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'About us',
    path: '/',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Map',
    path: '/',
    icon: <BiIcons.BiMapPin />,
    cName: 'nav-text'
  },
  {
    title: 'Contact us',
    path: '/',
    icon: <AiIcons.AiOutlineContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Help And Faq',
    path: '/',
    icon: <BiIcons.BiHelpCircle />,
    cName: 'nav-text'
  }

]
