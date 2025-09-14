import youtube from "../assets/iconesfoot/youtube.png"
import face from "../assets/iconesfoot/face.png"
import insta from "../assets/iconesfoot/insta.png"


export default function Footer(){
    return(
        <footer className="w-full text-gray-100 h-25 flex flex-col bg-purple-600 justify-center items-center gap-3">
            <div className="flex gap-7">
                <a href="https://www.youtube.com/"><img src={youtube} alt="" className="w-10 h-10"/></a>
                <a href="https://www.facebook.com/"><img src={face} alt="" className="w-10 h-10"/></a>
                <a href="https://www.instagram.com/"><img src={insta} alt="" className="w-10 h-10"/></a>
            </div>
            <p className="text-sm">&copy; 2025 Passa a Bola. Todos direitos reservados</p>
        </footer>
    )
}