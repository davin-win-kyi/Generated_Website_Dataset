import { SocialLayout } from "@/components/social-media/SocialLayout";
import { ContentComposer } from "@/components/social-media/ContentComposer";
import { PostCard } from "@/components/social-media/PostCard";
import { TrendingSidebar } from "@/components/social-media/TrendingSidebar";
import { mockPosts } from "@/data/mockPosts";

export default function FeedPage() {
  return (
    <SocialLayout>
      <div className="flex">
        <div className="flex-1 max-w-2xl mx-auto p-4 space-y-4">
          <h1 className="font-heading text-2xl font-bold">Home</h1>
          <ContentComposer />
          <div className="space-y-4" role="feed" aria-label="Post feed">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <TrendingSidebar />
      </div>
    </SocialLayout>
  );
}
