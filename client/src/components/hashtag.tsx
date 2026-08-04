import { useLocation } from "wouter"

export function HashTag({ name }: { name: string }) {
    const [_, setLocation] = useLocation()
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                setLocation(`/hashtag/${name}`)
            }}
            className="inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-all hover:bg-theme/10 hover:text-theme dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-theme/20 dark:hover:text-theme"
        >
            <span className="opacity-60">#</span>
            <span>{name}</span>
        </button>
    )
}
