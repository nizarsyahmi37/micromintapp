"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  TrendingUp, 
  Users, 
  Award,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("trending");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Just hit my first $1000 in investments! Started with $5 weekly deposits six months ago. Small steps lead to big wins! 🚀",
      likes: 234,
      comments: [
        {
          author: "Marcus Williams",
          avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          content: "Congratulations! That's amazing progress!",
          time: "1h ago"
        },
        {
          author: "Alex Johnson",
          avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          content: "What's your investment strategy?",
          time: "30m ago"
        }
      ],
      shares: 12,
      time: "2h ago"
    },
    {
      id: 2,
      author: "Marcus Williams",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Pro tip: Diversification isn't just about stocks vs bonds. Consider adding some REITs to your portfolio for real estate exposure without the huge upfront costs.",
      likes: 156,
      comments: [
        {
          author: "Sarah Chen",
          avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          content: "Great advice! I've been looking into REITs myself.",
          time: "1h ago"
        }
      ],
      shares: 8,
      time: "4h ago"
    },
    {
      id: 3,
      author: "Alex Johnson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Question for the community: What's your favorite ETF for tech sector exposure? Looking to add some growth potential to my portfolio.",
      likes: 89,
      comments: [],
      shares: 3,
      time: "6h ago"
    }
  ];

  const ShareDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
          <DialogDescription>
            Choose where you want to share this investment insight
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button variant="outline" className="w-full">
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button variant="outline" className="w-full">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" className="w-full">
            <LinkIcon className="mr-2 h-4 w-4" />
            Copy Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const CommentDialog = ({ post, isOpen, onClose }: { post: any; isOpen: boolean; onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Original Post */}
          <div className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
            <Link href={`/profile/${post.author.toLowerCase().replace(" ", "-")}`}>
              <Avatar>
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Link href={`/profile/${post.author.toLowerCase().replace(" ", "-")}`}>
                  <h4 className="font-semibold hover:underline">{post.author}</h4>
                </Link>
                <span className="text-sm text-muted-foreground">{post.time}</span>
              </div>
              <p className="mt-1">{post.content}</p>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {post.comments.map((comment: any, index: number) => (
              <div key={index} className="flex items-start space-x-4">
                <Link href={`/profile/${comment.author.toLowerCase().replace(" ", "-")}`}>
                  <Avatar>
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                </Link>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Link href={`/profile/${comment.author.toLowerCase().replace(" ", "-")}`}>
                      <h4 className="font-semibold hover:underline">{comment.author}</h4>
                    </Link>
                    <span className="text-sm text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="mt-1 text-sm">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* New Comment Input */}
          <div className="space-y-4">
            <Textarea placeholder="Write a comment..." className="w-full" />
            <div className="flex justify-end">
              <Button>Post Comment</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Community</h1>
        <Button>Create Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <Input placeholder="Share your investment journey..." className="mb-4" />
              <Button className="w-full">Post</Button>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="trending">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="latest">
                <MessageCircle className="h-4 w-4 mr-2" />
                Latest
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending">
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Link href={`/profile/${post.author.toLowerCase().replace(" ", "-")}`}>
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={post.avatar} alt={post.author} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                        </Link>
                        <div>
                          <Link href={`/profile/${post.author.toLowerCase().replace(" ", "-")}`}>
                            <h3 className="font-semibold hover:underline">{post.author}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <div onClick={() => setSelectedPost(post.id)}>
                        <p className="mb-4">{post.content}</p>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedPost(post.id)}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {post.comments.length}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4 mr-2" />
                              {post.shares}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Facebook className="h-4 w-4 mr-2" />
                              Share on Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Twitter className="h-4 w-4 mr-2" />
                              Share on Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Linkedin className="h-4 w-4 mr-2" />
                              Share on LinkedIn
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Copy Link
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="latest">
              <div className="text-center py-8 text-muted-foreground">
                Loading latest posts...
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="font-semibold mb-4">Community Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <p className="font-semibold">50,000+</p>
                    <p className="text-sm text-muted-foreground">Active Members</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <p className="font-semibold">10,000+</p>
                    <p className="text-sm text-muted-foreground">Daily Posts</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <p className="font-semibold">5,000+</p>
                    <p className="text-sm text-muted-foreground">Success Stories</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-semibold mb-4">Top Contributors</h2>
              <div className="space-y-4">
                {[
                  { name: "Sarah Chen", posts: 156, avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { name: "Marcus Williams", posts: 143, avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { name: "Alex Johnson", posts: 128, avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
                ].map((contributor, index) => (
                  <Link 
                    key={index} 
                    href={`/profile/${contributor.name.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center hover:bg-accent rounded-lg p-2 transition-colors"
                  >
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">{contributor.posts} posts</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {selectedPost && (
        <CommentDialog
          post={posts.find(p => p.id === selectedPost)}
          isOpen={true}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}