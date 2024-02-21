'use client'

import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { usePathname } from 'next/navigation'
import Link from "next/link";

interface Highlight {
    id: string;
    [key: string]: any;
}

const fetchdatafromfirebase = async (): Promise<Highlight[]> => {
    const fetchdata = await getDocs(collection(db, "Highlights"));

    const data: Highlight[] = [];
    fetchdata.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Highlight);
    });
    return data;
};

const Home: React.FC = () => {
    const pathname = usePathname().slice(11)

    const [userdata, setuserdata] = useState<Highlight[]>([]);
    useEffect(() => {
        async function getdata() {
            const data = await fetchdatafromfirebase();
            const finaldata = data.filter((item) => (item?.category === pathname))
            setuserdata(finaldata);
        }
        getdata();
    }, []);

    return (
        <main className="p-5 md:p-0">
            {userdata.map((item) => (
                <div className="flex flex-col">
                    <div className=" flex items-start justify-between">
                        <div>
                            <h1 className=" font-bold text-2xl ">Freelancer : <span className="text-green-600  uppercase">{item?.owner}</span></h1>
                            <h1 className=" text-md fontbold opacity-70">{item?.category}</h1>
                        </div>
                        <Link href={item?.livePreview} className="text-lg font-bold mt-1 bg-green-500 text-white px-4 py-2 rounded-md">Visit my work</Link>
                    </div>
                    <img src={item?.imgurl} className="mt-3 w-12/12 aspect-video rounded-lg" />

                </div>
            ))}
        </main>
    );
};

export default Home;