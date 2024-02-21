'use client'

import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import  Image  from 'next/image';

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
        <div key={item.id} className="flex flex-col">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Freelancer: <span className="uppercase text-green-600">{item?.owner}</span></h1>
                    <h1 className="text-md font-bold opacity-70">{item?.category}</h1>
                </div>
                {item?.livePreview && (
                    <Link href={item.livePreview} passHref>
                        <a className="mt-1 rounded-md bg-green-500 px-4 py-2 text-lg font-bold text-white">Visit my work</a>
                    </Link>
                )}
            </div>
            {item?.imgurl && (
                <Image 
                width={20}
                height = {20}
                src={item.imgurl} alt="Freelancer's work"
                 className="mt-3 aspect-video w-full rounded-lg" />
            )}
        </div>
    ))}
</main>

    );
};

export default Home;