const Figure = ({children}:any) => <div className='text-red-500 font-medium text-4xl tracking-wide'>{children}</div>
const FigureCaption = ({children}:any) => <div className='text-gray-200 text-sm uppercase tracking-normal'>{children}</div>

export {Figure,FigureCaption}