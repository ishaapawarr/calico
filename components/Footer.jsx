'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
     <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white text-lg">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <a href="Hero.jsx" className="text-white hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">About Us</a>
            </li>
            <li>
              <a href="/privacypolicy" className="text-white hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/tos" className="text-white hover:underline">Terms Of Service</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white text-lg">SUPPORT</h4>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-white hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/hc" className="text-white hover:underline">Help Center</a>
            </li>
            <li>
              <a href="/faqs" className="text-white hover:underline">FAQs</a>
            </li>
            <li>
              <a href="/accessibility" className="text-white hover:underline">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white text-lg">RESOURCES</h4>
          <ul className="space-y-2">
            <li>
              <a href="/get-started" className="text-white hover:underline">Get Started</a>
            </li>
            <li>
              <a href="/subscription" className="text-white hover:underline">Subscription Plans</a>
            </li>
            <li>
              <a href="/blog" className="text-white hover:underline">Blog & Updates</a>
            </li>
            <li>
              <a href="/careers" className="text-white hover:underline">Careers</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white text-lg">CONTACT US</h4>
          <ul className="space-y-2">
            <li className="text-white">Phone: +91 8433760810</li>
            <li className="text-white">Email: support@calico.com</li>
            <li className="text-white">Inquiries: info@calico.com</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-[75%] mx-auto md:w-full md:mx-0">
          <h4 className="font-bold text-white text-lg">STAY UPDATED!</h4>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-1.5 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-1.5 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none"
            />
            <button
              type="subscribe"
              className="w-full p-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 - 2025 Calico. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
