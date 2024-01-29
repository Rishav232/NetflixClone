import React, { useEffect, useMemo, useState } from 'react'
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import Charts from "../Charts/Charts";
import WidgetLg from "../widgetsLg/WidgetLg";
import WidgetSm from "../widgetsSm/WidgetSm";
import axios from "axios";
import "./home.css";
const Home = () => {

  const Months = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], []
  )
  const [userStats, setgetStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {

      try {
        const res = await axios.get("user/stats");
        // console.log(res.data);
        let d = res.data.map((item) => ({
          name: Months[item._id - 1],
          "New User": item.total
        }));

        setgetStats(d);
      } catch (error) {
        console.log(error);
      }
    }
    getStats();

  }, [Months])
  return (
    <div className="mainpage">
      <FeaturedInfo />
      <Charts title="User Analytics" dataKey={"New User"} data={userStats} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home