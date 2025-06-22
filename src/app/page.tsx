import BirdDetail from "@/components/integrated/birdDetail";
import BirdForm from "@/components/integrated/birdFrom";
import SyncToGmail from "@/components/integrated/syncToGmail";

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Pakshi Activity Tracker</h1>

                <p className="text-center mb-6">Track the daily activities of birds based on their sunrise and sunset times.</p>
                <BirdForm />
                <BirdDetail />
                <SyncToGmail />
            </div>
        </div>
    );
}
