import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

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
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
                    <Input
                        className="flex-1"
                        placeholder="Prendre rendez-vous"
                        type="text"
                    />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sélectionner la ville"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="paris">Paris</SelectItem>
                            <SelectItem value="lyon">Lyon</SelectItem>
                            <SelectItem value="marseille">Marseille</SelectItem>
                            <SelectItem value="toulouse">Toulouse</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button size="icon" className="bg-green-600 hover:bg-green-700">
                        <Search className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}