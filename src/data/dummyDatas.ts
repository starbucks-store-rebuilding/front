import {
  AddressType,
  BannerSlideImageType,
  CartProductType,
  CategoryMenuType,
  EventCarouselType,
  ProductDetailType,
  ProductItemType,
  ProductSortOptionType,
  SeasonType,
  PolicyLinkType,
  OrderProductType,
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

export const dummyProductDetails: ProductDetailType[] = [
  {
    id: 1,
    image: {
      imageUrl: 'https://picsum.photos/id/237/140',
      description: 'SS 핑크 탱크 텀블러 상세 이미지',
    },
    label: {
      isBest: true,
      isNew: false,
    },
    name: 'SS 핑크 탱크 텀블러 503ml',
    description: '내구성이 뛰어난 스테인리스 텀블러',
    price: 35000,
    salePrice: 31500,
    discountRate: 10,
    detailDescription:
      '이중 구조로 보온 및 보냉 효과가 뛰어나며, 실리콘 패킹이 있어 누수 방지가 가능합니다.',
  },
  {
    id: 2,
    image: {
      imageUrl: 'https://picsum.photos/id/237/400',
      description: '클래식 화이트 머그컵 상세 이미지',
    },
    label: {
      isBest: false,
      isNew: true,
    },
    name: '클래식 화이트 머그컵 300ml',
    description: '심플한 디자인의 화이트 머그컵',
    price: 15000,
    salePrice: 12000,
    discountRate: 20,
    detailDescription:
      '도자기로 제작되어 내열성이 뛰어나며, 따뜻한 음료를 오랫동안 유지할 수 있습니다.',
  },
  {
    id: 3,
    image: {
      imageUrl: 'https://dummyimage.com/140',
      description: '레드 트래블 텀블러 상세 이미지',
    },
    label: {
      isBest: false,
      isNew: false,
    },
    name: '레드 트래블 텀블러 500ml',
    description: '언제 어디서나 사용 가능한 텀블러',
    price: 25000,
    salePrice: 25000,
    discountRate: 0,
    detailDescription:
      '가벼운 무게와 슬림한 디자인으로 휴대가 용이하며, 뚜껑이 있어 먼지 유입을 방지할 수 있습니다.',
  },
  {
    id: 4,
    image: {
      imageUrl: 'https://dummyimage.com/300',
      description: '블랙 트렌드 텀블러 상세 이미지',
    },
    label: {
      isBest: true,
      isNew: true,
    },
    name: '블랙 트렌드 텀블러 600ml',
    description: '모던한 감성의 텀블러',
    price: 45000,
    salePrice: 40000,
    discountRate: 11,
    detailDescription:
      '프리미엄 소재로 제작되어 내구성이 뛰어나며, 음료를 신선하게 유지하는 기능이 있습니다.',
  },
];

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

export const categoryMenus: CategoryMenuType[] = [
  {
    id: 1,
    name: '텀블러/보온병',

    image: 'https://picsum.photos/id/237/390/330',
    description: '텀블러/보온병',
  },

  {
    id: 2,
    name: '머그컵/컵',

    image: 'https://dummyimage.com/500',
    description: '머그컵/컵',
  },
  {
    id: 3,
    name: '라이프스타일',

    image: 'https://dummyimage.com/500',
    description: '라이프스타일',
  },
  {
    id: 4,
    name: '티/커피용품',

    image: 'https://dummyimage.com/500',
    description: '티/커피용품',
  },

  {
    id: 5,
    name: '케이크',
    image: 'https://dummyimage.com/500',
    description: '케이크',
  },
  {
    id: 6,
    name: '초콜릿/스낵',

    image: 'https://dummyimage.com/500',
    description: '초콜릿/스낵',
  },
  {
    id: 7,
    name: '세트',
    image: 'https://dummyimage.com/500',
    description: '세트',
  },
];

export const dummyAddresses: AddressType[] = [
  {
    shippingAddressUuid: 'uuid-123',
    addressName: '우리집',
    recipientName: '홍길동',
    baseAddress: '서울특별시 강남구 테헤란로 123',
    zipCode: '06134',
    detailAddress: '101동 202호',
    phoneNumber: '010-1234-5678',
    secondPhoneNumber: '010-8765-4321',
    shippingNote: '부재 시 문 앞에 놓아주세요',
    defaulted: true,
  },
  {
    shippingAddressUuid: 'uuid-456',
    addressName: '회사',
    recipientName: '홍길동',
    baseAddress: '서울특별시 중구 세종대로 100',
    zipCode: '04523',
    detailAddress: '스타타워 15층',
    phoneNumber: '010-2222-3333',
    secondPhoneNumber: '010-4444-5555',
    shippingNote: '리셉션에 맡겨주세요',
    defaulted: false,
  },
];

export const dummyCartItems: CartProductType[] = [
  {
    userUuid: 'adasddsa',
    discountPrice: 15000,
    discountRate: 1,
    productQuantity: 2,
    checked: true,
    productOptionListUuid: 'option-uuid-456',
    productName: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    productImageUrl: 'https://dummyimage.com/1000',
    productPrice: 25000,
  },

  {
    userUuid: 'adasddsa',
    discountRate: 1,
    discountPrice: 20000,
    productQuantity: 2,
    checked: false,
    productOptionListUuid: 'option-uuid-457',
    productName: '텀블러 500ml',
    productImageUrl: 'https://picsum.photos/id/237/140',
    productPrice: 25000,
  },
  {
    userUuid: 'adasddsa',
    discountRate: 1,
    discountPrice: 0,
    productQuantity: 1,
    checked: false,
    productOptionListUuid: 'option-uuid-458',
    productName: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    productImageUrl: 'https://dummyimage.com/1000',
    productPrice: 40000,
  },
];

export const sortOptions: ProductSortOptionType[] = [
  { label: '신상품순', value: 'new' },
  { label: '추천순', value: 'recommend' },
  { label: '낮은가격순', value: 'price_asc' },
  { label: '높은가격순', value: 'price_desc' },
];

export const dummyCartSummary = {
  discount: 3000,
  shipping: 0,
};

export const dummyPolicyLinks: PolicyLinkType[] = [
  { href: '/', label: '개인정보처리방침' },
  { href: '/', label: '홈페이지 이용약관' },
  { href: '/', label: '스타벅스카드 이용약관' },
];

export const dummyOrderProduct: OrderProductType[] = [
  {
    productName: '아이스 아메리카노',
    productPrice: 4500,
    productQuantity: 2,
    productOptionListUuid: 'option-uuid-456',
    productImageUrl: 'https://dummyimage.com/1000',
    discountRate: 10,
  },
  {
    productName: '이제 정말 제발 되는건가요 제발 됐으면 좋겠어요',
    productPrice: 4500,
    productQuantity: 2,
    productOptionListUuid: 'option-uuid-457',
    productImageUrl: 'https://dummyimage.com/1000',
    discountRate: 10,
  },
];
