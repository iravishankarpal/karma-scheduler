import BirdDetail from "@/components/integrated/birdDetail";
import BirdForm from "@/components/integrated/birdFrom";

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div>
                <BirdForm />
                <BirdDetail />
            </div>
        </div>
    );
}
