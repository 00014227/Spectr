"use client"
import Image from "next/image"
import FooterLogo from "../assets/Group 3931.png"
import Tele from "../assets/icons/Vector.png"
import Face from "../assets/icons/Vector2.png"
import Twitter from "../assets/icons/Twitter.png"
import Insta from "../assets/icons/Instagram.png"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className=" w-full bg-[#282828] lg:px-52 px-3 pt-14 pb-11 ">    
            <div className="lg:flex justify-center  block gap-5">
                <Image src={FooterLogo} className="mx-auto" alt="SpectrLogo"/>
                <div className="w-[80%] h-0.5 bg-zinc-300 my-auto mx-auto" />
                <div className="flex lg:gap-4 gap-14  my-auto lg:mt-4 justify-center">
                    <Link href={"https://t.me/spectrmarketing"}>
                    <Image src={Tele} className=" w-9 h-8" alt="Telegram"/>
                    </Link>
                    
                    <Image src={Face} className=" w-9 h-8" alt="FaceBook"/>
                    <Image src={Twitter} className=" w-9 h-8" alt="Twitter"/>
                    <Link href={"https://www.instagram.com/spectr.marketing/"}>
                    
                    <Image src={Insta} className=" w-9 h-8" alt="Instagram"/>
                    </Link>
                </div>
            </div>

            <div className="lg:flex block mt-16 justify-between">
                <div className="flex lg:gap-24 gap-4 justify-between">
                    <Link href={""} className="text-white lg:text-2xl text-sm font-medium">Главная</Link>
                    <Link href={""} className="text-white lg:text-2xl text-sm font-medium">О нас</Link>
                    <Link href={""} className="text-white lg:text-2xl text-sm font-medium">Услуги</Link>
                    <Link href={""} className="text-white lg:text-2xl text-sm font-medium">Команда</Link>
                </div>

                <div className="lg:block flex justify-center gap-8 lg:mt-12 mt-0  lg:space-y-12">
                    <div>
                    <p className="text-white lg:text-2xl text-base font-medium">+998 99 940 44 88</p>
                    <p className="text-white text-sm font-normal">Ташкент</p>
                    </div>

                    <div>
                    <p className="text-white lg:text-2xl text-base font-medium">+998 99 940 44 88</p>
                    <p className="text-white text-sm font-normal">Ташкент</p>
                    </div>
                </div>
            </div>

            <div className="lg:flex block mt-16 justify-between">
                <p className="text-white lg:text-2xl text-xs font-medium">@Info.Spectr Marketing agency.com</p>
                <p className="text-white lg:text-2xl text-xs font-medium">Сайт разработан маркетинговым агентством Spectr</p>
            </div>
        </footer>
    )

}


