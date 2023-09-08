import React from "react";
import style from "./RecentOrder.module.css";
import image from "../../assets/images/Vector.svg";

const RecentOrder = () => {
  let order_data = [
    {
      name: "Acetaminophen Tablets",
      image: image,
      price: "70.00",
      quantity: "2",
      status: "Completed",
      date: "04 Sept 2023",
    },
    {
      name: "Acetaminophen Tablets",
      image: image,
      price: "70.00",
      quantity: "2",
      status: "Pending",
      date: "04 Sept 2023",
    },
    {
      name: "Acetaminophen Tablets",
      image: image,
      price: "70.00",
      quantity: "2",
      status: "Completed",
      date: "04 Sept 2023",
    },
    {
      name: "Acetaminophen Tablets",
      image: image,
      price: "70.00",
      quantity: "2",
      status: "Completed",
      date: "04 Sept 2023",
    },
    {
      name: "Acetaminophen Tablets",
      image: image,
      price: "70.00",
      quantity: "2",
      status: "Pending",
      date: "04 Sept 2023",
    },
  ];
  return (
    <>
      <div className={style.main_div}>
        <p className={style.main_heading}>Recent Orders</p>
        <div className={style.order_data_main_div}>
          {order_data.map((data, idx) => (
            <>
              <div className={style.order_div}>
                <div className={style.icon_div}>
                  <img src={data.image} alt="icon" />
                </div>
                <div className={style.order_details_div}>
                  <p className={style.order_details_name}>{data.name}</p>
                  <p className={style.order_details_price}>
                    ₹{data.price} x {data.quantity}
                  </p>
                </div>
                <div className={style.order_details_status}>
                  <p className={style.order_details_status_date}>{data.date}</p>
                  <p
                    className={
                      data.status === "Completed"
                        ? style.order_details_status_complete
                        : style.order_details_status_pending
                    }
                  >
                    {data.status}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
