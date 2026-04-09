"use client";
import { Button } from "../../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/20 dark:bg-gray-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 dark:bg-gray-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
          <Sparkles className="w-4 h-4 text-gray-900 dark:text-gray-100" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            AI-Powered Project Management
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-gray-900 dark:text-white">
            Ship Projects{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900 dark:text-white">2x Faster</span>
              <span className="absolute inset-x-0 bottom-0 h-3 bg-gray-900 dark:bg-white z-0" />
            </span>
          </span>
          <span className="block text-gray-900 dark:text-white mt-2">
            with Your AI Task Companion
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Automated workflows and intelligent task management designed for{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            remote teams & freelancers
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-pulse" />
            <span>2x faster shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" />
            <span>40% less admin time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse" />
            <span>24/7 AI assistance</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold text-white bg-gray-900 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100 cursor-pointer rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold cursor-pointer rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Trusted by remote teams worldwide
        </p>
      </div>
    </section>
  )
}

