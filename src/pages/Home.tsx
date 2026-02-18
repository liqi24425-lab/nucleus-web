import { Lock, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-16 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-2">
                    Nucleus
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Intelligent Health OS
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                    Powered by DeepSeek V3. The Next-Gen AI for Your Body.
                </p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Fusing Apple Health data with the reasoning power of DeepSeek AI to deliver clinical-grade insights instantly.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <a href="#" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                        Download Beta
                    </a>
                    <Link to="/support" className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                        Get Support
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Brain className="w-8 h-8 text-cyan-400" />}
                    title="DeepSeek Intelligence"
                    description="Powered by the SOTA DeepSeek model. Understands complex health correlations better than ever."
                />
                <FeatureCard
                    icon={<Zap className="w-8 h-8 text-yellow-400" />}
                    title="Cloud-Native Speed"
                    description="No local GPU needed. Get complex analysis in seconds, regardless of your phone's battery."
                />
                <FeatureCard
                    icon={<Lock className="w-8 h-8 text-green-400" />}
                    title="Smart Context"
                    description="Filters and anonymizes your health trends before analysis to ensure precise results and privacy."
                />
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export default Home;
