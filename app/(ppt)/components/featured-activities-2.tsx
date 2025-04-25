import PPTPageLayout from "./ppt-page-layout";
import { Trophy, Users } from "lucide-react";
import Image from "next/image";

export default function FeaturedActivities2() {
  const activities = [
    {
      category: "特色项目",
      items: [
        {
          icon: Users,
          title: "迷你黑客松",
          description: "闪电式团队组建、MVP开发、Demo演示",
        },
        {
          icon: Trophy,
          title: "Demo Day AI酒馆",
          description: "展示最具潜力项目给投资人、媒体，让创意得到更多关注和支持",
        },
      ],
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-8">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              特色活动 (2/2)
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              让创意持续迸发的实践场
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="mb-6">
            {activities.map((section) => (
              <div key={section.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-1.5 rounded-lg bg-primary/10">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Activity photos - large photo gallery */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { id: 'hack00001', caption: '迷你黑客松' },
              { id: 'gdc00007', caption: 'GDC全球开发者大会' },
              { id: 'demo00001', caption: 'BaysWork X Demo Day' },
              { id: 'bar00004', caption: 'All Day Club X AI 酒馆' },
              { id: 'meet00005', caption: 'AI Cafe X 硬件产品交流' },
              { id: 'hack00003', caption: '迷你黑客松' },
              { id: 'ai00013', caption: '少数派 X Demo Day' },
              { id: 'demo00002', caption: 'AI Cafe X Demo Day' },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
                  <Image 
                    src={`/images/events/${item.id}.jpg`} 
                    alt={item.caption}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
          
          {/* Caption */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            迷你黑客松与Demo Day活动现场
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 