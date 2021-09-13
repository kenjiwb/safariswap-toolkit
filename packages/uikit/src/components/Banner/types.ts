export interface BannerProps {
  date: 'daily' | 'weekly' | 'monthly';
  title: string;
  prizes: number;
  description: string;
  image: string;
}
