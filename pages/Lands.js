import { useState, useEffect } from "react";
import { Button, Modal, Card } from "antd";
import Navbar from "../components/navbar/Navbar";

const lands = () => {
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  return (
    <div className="  ">
        <Navbar />


            <Modal
              title="Land"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
              okButtonProps={{
                disabled: true,
                style: {
                  display: "none",
                },
              }}
              cancelButtonProps={{
                disabled: true,
                style: {
                  display: "none",
                },
              }}
            >
              <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7vzxT?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
            </Modal>
      <div class="flex flex-col m-auto p-auto">
        <h1 class="flex py-5  font-bold text-4xl text-gray-800">Listen More</h1>
        <div class="flex overflow-x-scroll pb-10 scrollbar-hide">
          <div class="flex flex-nowrap ">
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1uDq2ijo219s4eadWtNTG0Rj1MKh9dt-Xg&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Final Draft</h1>
                <h3 className="text-center">Album Launch</h3>
              </div>
            </div>

            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrvl5GJfleFJD52tcjHndJKm4ipw5U7fZQA&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Paradise</h1>
                <h3 className="text-center">Album Single Release</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61loou-gZEzuZTGu384YV7-Fkf13RD92gzzHa45nwZU2GbeF0DZG8_bXEQzsA9VzwKfw&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Eye</h1>
                <h3 className="text-center">Cat got my tounge</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcy-BA8rsWFGuHYAFP4dTntGQhLzdKmL_BRmoFuis8yuyz81Pb7NkexizV6JROB_jbxWQ&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Song Name</h1>
                <h3 className="text-center">Online for onlinw streams</h3>
              </div>
            </div>

            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1uDq2ijo219s4eadWtNTG0Rj1MKh9dt-Xg&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Final Draft</h1>
                <h3 className="text-center">Album Launch</h3>
              </div>
            </div>

            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrvl5GJfleFJD52tcjHndJKm4ipw5U7fZQA&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Paradise</h1>
                <h3 className="text-center">Album Single Release</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61loou-gZEzuZTGu384YV7-Fkf13RD92gzzHa45nwZU2GbeF0DZG8_bXEQzsA9VzwKfw&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Eye</h1>
                <h3 className="text-center">Cat got my tounge</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcy-BA8rsWFGuHYAFP4dTntGQhLzdKmL_BRmoFuis8yuyz81Pb7NkexizV6JROB_jbxWQ&usqp=CAU"
                  alt=""
                />
                
                <h1 className="mt-0 text-center font-bold">Song Name</h1>
                <h3 className="text-center">Online for onlinw streams</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lands;
