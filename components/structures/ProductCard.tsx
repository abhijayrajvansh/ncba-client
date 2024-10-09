import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TiStarFullOutline } from "react-icons/ti";

interface ProductProps {
  name: string;
  icon: React.ElementType;
  description: string;
  rating: number;
  votes: number;
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps ) => (
  <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
    <div className=''>
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        <product.icon />
      </div>
    </CardHeader>
    
    <CardContent>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2 flex items-center">
        {[...Array(5)].map((_, i) => (
          <TiStarFullOutline key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {product.rating.toFixed(1)} ({product.votes} votes)
        </span>
      </div>
    </CardContent>
    </div>
    <CardFooter className=''>
      <Button className="w-full font-semibold text-white">View More</Button>
    </CardFooter>
  </Card>
);

export default ProductCard;