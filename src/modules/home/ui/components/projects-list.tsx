"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const ProjectCardSkeleton = () => {
  return (
    <div className="h-auto w-full rounded-md border p-4 animate-pulse">
      <div className="flex items-center gap-x-4">
        <div className="h-8 w-8 rounded-md bg-muted" />

        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 w-3/4 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
};

export const ProjectsList = () => {
  const trpc = useTRPC();
  const { user, isLoaded, isSignedIn } = useUser();
  const { data: projects, isLoading } = useQuery({
    ...trpc.projects.getMany.queryOptions(),
    enabled: isLoaded && isSignedIn,
  });

  if (!isSignedIn)
    return (
      <div className="flex items-center justify-center">
        <p className="bg-white/60 dark:bg-sidebar/60 rounded-xl p-8 border flex max-w-xl items-center justify-center">
          Sign in to save your projects
        </p>
      </div>
    );

  return (
    <div className="w-full bg-white dark:bg-sidebar rounded-xl p-8 border flex flex-col gap-y-6 sm:gap-y-4">
      <h2 className="text-2xl font-semibold">
        {user?.firstName}&apos;s projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}

        {!isLoading && projects?.length === 0 && (
          <div className="col-span-full text-center">
            <p className="text-sm text-muted-foreground">No projects found</p>
          </div>
        )}

        {!isLoading &&
          projects?.map((project) => (
            <Button
              key={project.id}
              variant="outline"
              className="font-normal h-auto justify-start w-full text-start p-4"
              asChild
            >
              <Link href={`/projects/${project.id}`}>
                <div className="flex items-center gap-x-4 truncate">
                  <Image
                    src="/logo.svg"
                    alt="vibe logo"
                    width={32}
                    height={32}
                    className="object-contain w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <h3 className="truncate font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDistanceToNow(project.updatedAt, {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </Button>
          ))}
      </div>
    </div>
  );
};
