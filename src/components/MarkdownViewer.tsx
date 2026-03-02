import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';
import { FileText, Hash, Share2 } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto mt-12 mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {/* Tech Card Container */}
      <div className="relative bg-white/90 backdrop-blur-md shadow-xl clip-tech-card border-l-4 border-l-blue-500">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-md">
              <FileText size={18} />
            </div>
            <div>
              <h2 className="font-mono text-sm font-bold text-slate-700">README.md</h2>
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Last Updated: TODAY</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12">
          <div className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-800
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-slate-200
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:flex prose-h2:items-center prose-h2:gap-2
            prose-p:font-sans prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline prose-a:border-b prose-a:border-blue-300 hover:prose-a:border-blue-600 hover:prose-a:text-blue-700 prose-a:transition-colors
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
            prose-code:font-mono prose-code:text-blue-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-slate-900 prose-pre:shadow-lg prose-pre:rounded-xl
            prose-li:marker:text-blue-400
          ">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({node, ...props}) => <h2 {...props}><span className="text-blue-500 text-lg">#</span> {props.children}</h2>
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="bg-slate-900 text-slate-400 px-6 py-2 text-[10px] font-mono flex justify-between items-center clip-corner-br">
          <div className="flex gap-4">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
            <span>Markdown</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements behind */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/20 rounded-tr-3xl -z-10" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/20 rounded-bl-3xl -z-10" />
    </motion.div>
  );
}
