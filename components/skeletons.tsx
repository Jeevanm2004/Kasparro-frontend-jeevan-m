import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function DashboardSkeleton() {
    return (
        <div className="space-y-6 animate-pulse">
            <div className="flex justify-between items-center">
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-8 w-[100px] rounded-full" />
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <Card key={i} className="border-none shadow-sm bg-card/50">
                        <CardHeader className="pb-2">
                            <Skeleton className="h-4 w-[100px]" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-[60px] mb-2" />
                            <Skeleton className="h-3 w-[80px]" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-7 h-[400px]">
                <Skeleton className="col-span-4 rounded-xl" />
                <Skeleton className="col-span-3 rounded-xl" />
            </div>
        </div>
    )
}

export function AuditSkeleton() {
    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <div className="flex justify-between">
                    <Skeleton className="h-10 w-[300px]" />
                    <Skeleton className="h-8 w-[100px] rounded-full" />
                </div>
                <Skeleton className="h-6 w-full max-w-2xl" />
            </div>

            <Skeleton className="h-px w-full" />

            <div className="space-y-4">
                <div className="flex gap-2">
                    <Skeleton className="h-10 w-[100px] rounded-md" />
                    <Skeleton className="h-10 w-[120px] rounded-md" />
                    <Skeleton className="h-10 w-[150px] rounded-md" />
                </div>
                <Skeleton className="h-[200px] w-full rounded-xl" />
            </div>
        </div>
    )
}
