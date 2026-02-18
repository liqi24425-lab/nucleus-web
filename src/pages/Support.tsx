import { HelpCircle, Zap, AlertTriangle, MessageSquare, Smartphone, Server, Wifi, UserCheck } from 'lucide-react';

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-8">
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">How can we help?</h1>
                <p className="text-gray-400 text-lg">Find answers, usage guides, and troubleshooting tips.</p>
            </header>

            {/* Guide: Usage & Credits */}
            <section className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Zero Configuration</h3>
                    <p className="text-gray-400 mb-4">
                        Forget about servers or VPNs. Just sign in, grant Health permissions, and start chatting.
                    </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Daily Credits</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li><strong>Free Plan:</strong> 10 Credits / Day (Resets at midnight)</li>
                        <li><strong>Pro Plan:</strong> Unlimited Access (Unlocks DeepSeek R1 Reasoning)</li>
                    </ul>
                </div>
            </section>

            <hr className="border-white/10" />

            {/* Guide: Troubleshooting */}
            <section id="troubleshooting" className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    Troubleshooting
                </h2>

                <div className="space-y-4">
                    <h3 className="text-gray-300 font-medium ml-1">If you see "Connection Failed" or "0/0 Credits":</h3>

                    <div className="grid gap-4">
                        <TroubleshootItem
                            icon={<Wifi className="w-5 h-5 text-gray-400" />}
                            title="Network"
                            desc="Ensure your iPhone has an active internet connection (Wi-Fi/5G)."
                        />
                        <TroubleshootItem
                            icon={<HelpCircle className="w-5 h-5 text-gray-400" />}
                            title="Permissions"
                            desc="Check Settings > Privacy. Is HealthKit access enabled?"
                        />
                        <TroubleshootItem
                            icon={<UserCheck className="w-5 h-5 text-gray-400" />}
                            title="Account Status"
                            desc="Go to Nucleus Settings. Is your subscription active?"
                        />
                        <TroubleshootItem
                            icon={<Server className="w-5 h-5 text-gray-400" />}
                            title="Server Status"
                            desc="Occasionally DeepSeek API might be busy. Try again in 1 minute."
                        />
                    </div>
                </div>
            </section>

            <section className="text-center pt-8">
                <p className="text-gray-500">Still need help?</p>
                <a href="mailto:ralph2167793145@outlook.com" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mt-2 font-medium">
                    <MessageSquare className="w-4 h-4" />
                    Contact Support (ralph2167793145@outlook.com)
                </a>
                <p className="text-xs text-gray-600 mt-2">Nucleus Pro users typically receive priority support within 12 hours.</p>
            </section>
        </div>
    );
};

const TroubleshootItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
        <div className="mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-white text-sm">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </div>
);

export default Support;
