import { render } from '@testing-library/react';
import App from './App';


const dummyNews=[
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Justine Calma",
      "title": "Can banks push Bitcoin to clean up its act?",
      "description": "Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the cryptocurrency’s pollution.",
      "url": "https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg",
      "publishedAt": "2023-07-11T14:00:00Z",
      "content": "Can banks push Bitcoin to clean up its act?\r\nCan banks push Bitcoin to clean up its act?\r\n / Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the crypto… [+4372 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Kevin Hurler",
      "title": "SEC Reportedly Asked Coinbase to Halt All Trading—Except for Bitcoin",
      "description": "Coinbase’s CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities & Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. According to Armstrong, the suggestion came just before the SEC sue…",
      "url": "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg",
      "publishedAt": "2023-07-31T14:55:00Z",
      "content": "Coinbases CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities &amp; Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. Acco… [+1850 chars]"
  }
]

test("render news list", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('news')).toBeInTheDocument();
});

test("check news data", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(dummyNews),
    })
  );
});




