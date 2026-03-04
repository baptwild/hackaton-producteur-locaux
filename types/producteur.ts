export interface Producteur {
  id: number
  slug: string
  name: string
  category: string
  categoryLabel: string
  description: string
  address: string
  city: string
  lat: number
  lng: number
  postalCode: string
  region: string
  country: string
  areaServed: string
  certifications: string[]
  products: string[]
  image: string
  phone: string
  email: string
}
