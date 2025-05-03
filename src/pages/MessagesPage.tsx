"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import PageHeader from "../components/PageHeader"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  read: boolean
  avatar: string
}

export default function MessagesPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"inbox" | "community">("inbox")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [newMessage, setNewMessage] = useState("")

  // Sample messages data
  const messages: Message[] = [
    {
      id: "1",
      sender: "Financial Advisor",
      content:
        "Hello! I noticed you've been making great progress with your budgeting goals. Would you like to schedule a call to discuss some investment options that might be suitable for you?",
      timestamp: "2023-05-15T14:30:00Z",
      read: false,
      avatar: "F",
    },
    {
      id: "2",
      sender: "SmartFin Team",
      content:
        "Congratulations! You've earned 500 bonus points for completing all your financial literacy modules this month. Keep up the great work!",
      timestamp: "2023-05-10T09:15:00Z",
      read: true,
      avatar: "S",
    },
    {
      id: "3",
      sender: "Community Manager",
      content:
        "Thank you for your active participation in our forum discussions. Your insights on student loan repayment strategies have been very helpful to the community.",
      timestamp: "2023-05-05T16:45:00Z",
      read: true,
      avatar: "C",
    },
  ]

  // Sample community posts
  const communityPosts = [
    {
      id: "1",
      author: "Jessica M.",
      title: "Tips for saving while in college",
      content: "I've been able to save $200 per month while in college by following these simple strategies...",
      timestamp: "2023-05-14T10:30:00Z",
      likes: 24,
      comments: 8,
      avatar: "J",
    },
    {
      id: "2",
      author: "David L.",
      title: "Question about student loan refinancing",
      content: "Has anyone had experience refinancing their student loans with SoFi or Earnest? I'm considering...",
      timestamp: "2023-05-12T15:20:00Z",
      likes: 12,
      comments: 15,
      avatar: "D",
    },
    {
      id: "3",
      author: "Financial Expert",
      title: "Understanding credit scores as a student",
      content: "Many students don't realize how important their credit score is. Here's what you need to know...",
      timestamp: "2023-05-08T09:45:00Z",
      likes: 56,
      comments: 23,
      avatar: "F",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === "") return
    // In a real app, you would send the message to the server
    alert(`Message sent: ${newMessage}`)
    setNewMessage("")
  }

  if (!user) {
    return (
      <main>
        <PageHeader title="Messages" subtitle="Connect with financial experts and the SmartFin community" />
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-16 w-16 text-gray-400"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <circle cx="12" cy="10" r="2"></circle>
              <line x1="8" x2="8" y1="2" y2="4"></line>
              <line x1="16" x2="16" y1="2" y2="4"></line>
            </svg>
            <h2 className="mb-2 text-xl font-bold">Sign in to access messages</h2>
            <p className="mb-6 text-gray-600">
              You need to be signed in to view your messages and participate in the community.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/signin"
                className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <PageHeader title="Messages" subtitle="Connect with financial experts and the SmartFin community" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="mb-4 flex space-x-2">
                <button
                  onClick={() => setActiveTab("inbox")}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium ${
                    activeTab === "inbox" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Inbox
                </button>
                <button
                  onClick={() => setActiveTab("community")}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium ${
                    activeTab === "community"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Community
                </button>
              </div>

              {activeTab === "inbox" ? (
                <div className="space-y-2">
                  {messages.map((message) => (
                    <button
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`flex w-full items-start rounded-lg p-3 text-left transition-colors ${
                        selectedMessage?.id === message.id
                          ? "bg-green-50"
                          : message.read
                            ? "hover:bg-gray-50"
                            : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        {message.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p
                            className={`truncate text-sm font-medium ${
                              message.read ? "text-gray-900" : "font-bold text-gray-900"
                            }`}
                          >
                            {message.sender}
                          </p>
                          <p className="ml-2 text-xs text-gray-500">{formatDate(message.timestamp)}</p>
                        </div>
                        <p className="mt-1 truncate text-xs text-gray-500">{message.content.substring(0, 60)}...</p>
                      </div>
                      {!message.read && <span className="ml-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></span>}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                          {post.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {post.author} • {formatDate(post.timestamp)}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-gray-600">{post.content.substring(0, 100)}...</p>
                      <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 h-3 w-3"
                          >
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 h-3 w-3"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            {activeTab === "inbox" ? (
              selectedMessage ? (
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                        {selectedMessage.avatar}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">{selectedMessage.sender}</h2>
                        <p className="text-sm text-gray-500">{new Date(selectedMessage.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                      <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mb-6 rounded-lg bg-gray-50 p-4">
                    <p className="text-gray-700">{selectedMessage.content}</p>
                  </div>

                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div>
                      <label htmlFor="reply" className="sr-only">
                        Reply
                      </label>
                      <textarea
                        id="reply"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-3"
                        placeholder="Type your reply..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
                      >
                        Send Reply
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center rounded-xl bg-white p-12 text-center shadow-sm">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 h-16 w-16 text-gray-400"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <h2 className="mb-2 text-xl font-bold">Select a message</h2>
                    <p className="text-gray-600">Choose a message from your inbox to view its contents.</p>
                  </div>
                </div>
              )
            ) : (
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold">Community Forum</h2>
                <div className="mb-6 rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-4 text-lg font-bold">Start a Discussion</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Enter a title for your discussion"
                      />
                    </div>
                    <div>
                      <label htmlFor="content" className="mb-1 block text-sm font-medium text-gray-700">
                        Content
                      </label>
                      <textarea
                        id="content"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Share your thoughts, questions, or insights..."
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
                      >
                        Post Discussion
                      </button>
                    </div>
                  </form>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold">Popular Discussions</h3>
                  {communityPosts.map((post) => (
                    <div key={post.id} className="rounded-lg border border-gray-200 p-4">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                            {post.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold">{post.author}</h4>
                            <p className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleString()}</p>
                          </div>
                        </div>
                        <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
                      <p className="mb-4 text-gray-700">{post.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <button className="flex items-center text-gray-500 hover:text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <path d="M7 10v12"></path>
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span className="text-sm">{post.comments}</span>
                          </button>
                        </div>
                        <button className="text-sm font-medium text-green-600 hover:text-green-700">
                          View Discussion
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
