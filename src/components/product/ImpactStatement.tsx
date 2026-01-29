interface ImpactStatementProps {
  statement: string
}

export default function ImpactStatement({ statement }: ImpactStatementProps) {
  return (
    <div className="bg-royal-blue/5 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-antique-gold/20 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-antique-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-2">
            Your Impact
          </h3>
          <p className="text-charcoal/80">{statement}</p>
        </div>
      </div>
    </div>
  )
}
