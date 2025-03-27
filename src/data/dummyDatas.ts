import {
  AddressType,
  BannerSlideImageType,
  CartProductType,
  CategoryMenuType,
  EventCarouselType,
  ProductCategoryType,
  ProductDetailType,
  ProductItemType,
  seasonType,
} from '@/types/ResponseDataTypes';

export const mainBannerSlideData: BannerSlideImageType[] = [
  {
    id: 1,
    description: 'main banner 1',
    imageUrl: 'https://picsum.photos/id/237/390/330',
  },
  {
    id: 2,
    description: 'main banner 2',
    imageUrl: 'https://dummyimage.com/500',
  },
  {
    id: 3,
    description: 'main banner 3',
    imageUrl: 'https://dummyimage.com/1000',
  },
];

export const dummyProducts: ProductItemType[] = [
  {
    id: 1,
    thumbnail: {
      imageUrl: 'https://picsum.photos/id/237/140',
      description: 'desc1',
    },
    label: {
      isBest: true,
      isNew: false,
    },
    name: 'SS 핑크 탱크 텀블러 503ml',
    price: 35000,
    salePrice: 31500,
    discountRate: 10,
  },
  {
    id: 2,
    thumbnail: {
      imageUrl: 'https://picsum.photos/id/237/400',
      description: 'desc2',
    },
    label: {
      isBest: false,
      isNew: true,
    },
    name: '클래식 화이트 머그컵 300ml',
    price: 15000,
    salePrice: 12000,
    discountRate: 20,
  },
  {
    id: 3,
    thumbnail: { imageUrl: 'https://dummyimage.com/140', description: 'desc3' },
    label: {
      isBest: false,
      isNew: false,
    },
    name: '레드 트래블 텀블러 500ml',
    price: 25000,
    salePrice: 25000,
    discountRate: 0,
  },
  {
    id: 4,
    thumbnail: { imageUrl: 'https://dummyimage.com/300', description: 'desc4' },
    label: {
      isBest: true,
      isNew: true,
    },
    name: '블랙 트렌드 텀블러 600ml',
    price: 45000,
    salePrice: 40000,
    discountRate: 11,
  },
];

export const dummyProductDetail: ProductDetailType = {
  id: 1,
  image: { imageUrl: 'https://dummyimage.com/1000', description: 'Product 1' },
  label: {
    isBest: true,
    isNew: false,
  },
  name: 'SS 플라워 마켓 스탠리 켄처 텀블러 591ml',
  description:
    '부드러운 꽃향기의 색을 닮은 플라워 마켓 스탠리 켄처 텀블러입니다.',
  price: 42000,
  salePrice: 40000,
  discountRate: 20,
  detailDescription: 'https://example.com/products/1',
};

export const eventCarousels: EventCarouselType[] = [
  {
    eventId: 1,
    title: 'MD FESTA',
    products: dummyProducts,
  },
  {
    eventId: 2,
    title: 'Ways of Working',
    products: dummyProducts,
  },
  {
    eventId: 3,
    title: 'Flower Market',
    products: dummyProducts,
  },
];

export const productCategories: ProductCategoryType[] = [
  {
    id: 1,
    name: '텀블러',
    subCategory: [
      { id: 1, name: '플라스틱 텀블러' },
      { id: 2, name: '스테인리스 텀블러' },
      { id: 3, name: '무슨 텀블러' },
    ],
  },
  {
    id: 2,
    name: '머그컵',
    subCategory: [
      { id: 1, name: '머그' },
      { id: 2, name: '글라스' },
      { id: 3, name: '리유저블' },
    ],
  },
  {
    id: 3,
    name: '라이프스타일',
    subCategory: [
      { id: 1, name: '3월 신규코어' },
      { id: 2, name: '플라워 마켓' },
      { id: 3, name: '러브 켄처' },
    ],
  },
  {
    id: 4,
    name: '커피 용품',
  },
  {
    id: 5,
    name: '티 용품',
    subCategory: [
      { id: 1, name: '티팟' },
      { id: 2, name: '티 인퓨저' },
      { id: 3, name: '티 스트레이너' },
    ],
  },
  {
    id: 6,
    name: '음료 & 시럽',
    subCategory: [
      { id: 1, name: '원두' },
      { id: 2, name: '캡슐 커피' },
      { id: 3, name: '시럽 & 소스' },
    ],
  },
  {
    id: 7,
    name: '주방용품',
    subCategory: [
      { id: 1, name: '보틀' },
      { id: 2, name: '컵 & 접시' },
      { id: 3, name: '트레이' },
    ],
  },
  {
    id: 8,
    name: '가전제품',
    subCategory: [
      { id: 1, name: '커피 머신' },
      { id: 2, name: '그라인더' },
      { id: 3, name: '우유 거품기' },
    ],
  },
  {
    id: 9,
    name: '사무 & 문구',
    subCategory: [
      { id: 1, name: '다이어리' },
      { id: 2, name: '펜' },
      { id: 3, name: '노트' },
    ],
  },
  {
    id: 10,
    name: '패션 & 액세서리',
    subCategory: [
      { id: 1, name: '에코백' },
      { id: 2, name: '텀블러 파우치' },
      { id: 3, name: '키링' },
    ],
  },
];

export const categoryMenus: CategoryMenuType[] = [
  {
    id: 1,
    name: '텀블러/보온병',
    thumbnail: {
      imageUrl: 'https://picsum.photos/id/237/390/330',
      description: '텀블러/보온병',
    },
  },
  {
    id: 2,
    name: '머그컵/컵',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '머그컵/컵',
    },
  },
  {
    id: 3,
    name: '라이프스타일',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '라이프스타일',
    },
  },
  {
    id: 4,
    name: '티/커피용품',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '티/커피용품',
    },
  },
  {
    id: 5,
    name: '케이크',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '케이크',
    },
  },
  {
    id: 6,
    name: '초콜릿/스낵',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '초콜릿/스낵',
    },
  },
  {
    id: 7,
    name: '세트',
    thumbnail: {
      imageUrl: 'https://dummyimage.com/500',
      description: '세트',
    },
  },
];

export const dummyAddresses: AddressType[] = [
  {
    id: 1,
    addressName: '우리집',
    recipientName: '홍길동',
    baseAddress: '서울특별시 강남구 테헤란로 123',
    zipCode: '06134',
    detailAddress: '101동 202호',
    phoneNumber: '010-1234-5678',
    secondPhoneNumber: '010-8765-4321',
    shippingNote: '부재 시 문 앞에 놓아주세요',
    defaultAddress: true,
  },
  {
    id: 2,
    addressName: '회사',
    recipientName: '홍길동',
    baseAddress: '서울특별시 중구 세종대로 100',
    zipCode: '04523',
    detailAddress: '스타타워 15층',
    phoneNumber: '010-2222-3333',
    secondPhoneNumber: '010-4444-5555',
    shippingNote: '리셉션에 맡겨주세요',
    defaultAddress: false,
  },
];

export const dummyCartItems: CartProductType[] = [
  {
    id: 1,
    userUuid: 'user-uuid-123',
    cartUuid: 'cart-uuid-abc',
    productQuantity: 2,
    checkBox: true,
    productOptionListUuid: 'option-uuid-456',
    productName: '텀블러 500ml',
    productImageUrl: 'https://picsum.photos/id/237/140',
    productPrice: 25000,
    selectedOptions: {
      색상: '블랙',
    },
  },
  {
    id: 2,
    userUuid: 'user-uuid-123',
    cartUuid: 'cart-uuid-abc',
    productQuantity: 2,
    checkBox: true,
    productOptionListUuid: 'option-uuid-456',
    productName: '텀블러 500ml',
    productImageUrl: 'https://picsum.photos/id/237/140',
    productPrice: 25000,
    selectedOptions: {
      색상: '블랙',
    },
  },
];

export const seasonList: seasonType[] = [
  { name: '3월 신규코어', seasonId: 1 },
  { name: '플라워 마켓', seasonId: 2 },
  { name: '러브 켄처', seasonId: 3 },
  { name: '시즌4', seasonId: 4 },
  { name: '시즌5', seasonId: 5 },
  { name: '시즌6', seasonId: 6 },
];
