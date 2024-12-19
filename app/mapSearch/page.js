import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import Link from 'next/link'; // Ajoute cet import en haut de ton fichier


export default function MapSearch()
{
    return (
        <div className="relative min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://www.photo-paysage.com/?file=pic_download_link/picture&pid=296')",  // Remplacez cette URL par celle de votre image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>


            {/* Search Container */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex justify-center items-center">
                <Link
                    href="/contact"
                    className="px-12 py-6 rounded-full bg-white text-green-600 mt-3 text-lg font-bold text-center"
                >
                    Nous contacter
                </Link>
            </div>

        </div>
    )
}