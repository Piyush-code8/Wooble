import {useState, useEffect} from 'react';
import axios from 'axios';
import "./club.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Club() {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
          const res = await axios.get("/clubs")
          console.log(res.data)
          setClubs(res.data);
        }
        fetchClubs();
        setLoading(false)
      }, []);

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="club">
            <div className="clubBox">
                <div className="clubName">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                            return <div>{club.name}</div>
                        })}
                </div>
                    <div className="clubDesc">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <div>{club.desc}</div>
                            })}
                    </div>
                    <div className="clubImg">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <img src={club.img} alt=""></img>
                            })}
                    </div>
                    <div className="clubMembers">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <div>{club.members}</div>
                            })}
                    </div>
            </div>

            <div className="clubBox1">
                <div className="clubName1">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                            return <div>{club.name1}</div>
                        })}
                </div>
                    <div className="clubDesc1">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <div>{club.desc1}</div>
                            })}
                    </div>
                    <div className="clubImg1">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <img src={club.img1} alt=""></img>
                            })}
                    </div>
                    <div className="clubMembers1">
                        {loading ? (<div>Loading...</div>) : clubs?.map((club) => {
                                return <div>{club.members1}</div>
                            })}
                    </div>
            </div>
        </div>

        <Rightbar/>
        </div>
    </>
  );
}
