import { MainLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholder = () => {
  const [showImage, setShowImage] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1509391618207-32f1fa13c1d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://www.franksrestaurantla.com/wp-content/uploads/2015/11/Eat-fresh-fruits-and-vegetables.jpg",
    "https://wothot.com/wp-content/uploads/2018/04/instagram-In-Stream_Square___berry-fruit-salad-5-2.jpg",
    "https://mercaitoxpress.com/wp-content/uploads/2021/01/fruit-pack-mercaito.jpg",
    "https://i.pinimg.com/originals/95/aa/05/95aa05d31f2adf429a048100fdb3c04f.jpg",
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 3000);
  });

  return (
    <MainLayout>
      <div className="p-5 border rounded shadow">
        <div className="grid grid-cols-12 gap-3">
          {images.map((image, i) => (
            <div className="col-span-3" key={i}>
              <AnimatePresence>
                {showImage ? (
                  <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={image} />
                ) : (
                  <div className="bg-gray-200 rounded-lg h-72 animate-pulse"></div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* <div className="flex">
          <div className="mr-6">
            <AnimatePresence>
              {showImage ? (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-lg w-14 h-14"
                  src="https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529194285863-CJKZQYFQW19BZULFH1N4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/AlebertoCarmona-500x500.jpg"
                  alt=""
                />
              ) : (
                <div className="bg-gray-200 rounded-lg w-14 h-14 animate-pulse"></div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex-1">
            <AnimatePresence>
              {showImage ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-lg font-semibold text-gray-800">Erickson Manuel Holguín</div>
                  <div className="font-medium text-gray-400">Ing. En Sistemas Computacionales</div>
                </motion.div>
              ) : (
                <>
                  <div className="w-1/3 h-6 mb-2 bg-gray-200 rounded-sm animate-pulse"></div>
                  <div className="w-1/3 h-4 bg-gray-100 rounded-sm animate-pulse"></div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <button onClick={() => setShowImage(!showImage)}>Change</button> */}
      </div>
    </MainLayout>
  );
};

export default placeholder;
