import { useState } from 'react'

export default function Address() {
  return (
    <main
      id="address-section"
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] flex min-h-screen flex-col gap-y-4 px-4 pt-[84px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        더 정확한 맞춤 공고를 위해, 거주하시는 곳을 알려주세요
      </h1>
      <CustomAddressSearch />
    </main>
  )
}

function CustomAddressSearch() {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(undefined)

  const searchAddress = async () => {
    try {
      const response = await fetch(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=U01TX0FVVEgyMDI1MDkwNzAwMDQxMzExNjE1NDk=&keyword=${keyword}&resultType=json`,
      )
      const data = await response.json()
      console.log(data)
      setResults(data.results.juso || [])
    } catch (error) {
      console.error('주소 검색 실패:', error)
    }
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex gap-1">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="도로명, 지번, 건물명 검색"
          className="caption-sm-medium w-full rounded-[4px] bg-neutral-100 p-2 outline-purple-500 placeholder:text-neutral-400"
        />
        <button
          onClick={searchAddress}
          className="caption-sm-medium flex h-[32px] items-center justify-center rounded-[4px] bg-purple-500 px-2 whitespace-nowrap text-white hover:bg-purple-600"
        >
          검색
        </button>
      </div>

      <div className="mt-[9px] space-y-2">
        {selectedAddress ? (
          <div className="flex flex-col gap-y-[9px]">
            <div className="caption-sm-medium rounded-[4px] bg-neutral-100 p-2 text-neutral-400">
              {selectedAddress}
            </div>
            <button
              onClick={() => {
                setSelectedAddress(undefined)
              }}
              className="caption-sm-medium h-[32px] w-fit cursor-pointer rounded-[4px] border border-neutral-300 bg-neutral-100 px-2"
            >
              초기화
            </button>
          </div>
        ) : (
          <div className="">
            {results.length === 10 ? (
              <div>
                <div className="caption-sm-medium flex flex-col items-center justify-center border-b border-neutral-300 py-[30px] text-center">
                  검색 결과가 너무 많습니다.
                  <br />
                  검색어를 상세히 입력해보세요.
                </div>
                <div className="flex flex-col h-[194px] overflow-y-scroll">
                  {results.map((address, index) => (
                    <div className="flex items-start justify-between gap-x-[14px] pb-[18px] pt-[16px] border-b border-neutral-300" key={index}>
                      <div
                        className="flex cursor-pointer flex-col gap-y-4"
                        onClick={() => console.log('선택된 주소:', address.roadAddr)}
                      >
                        <div className="caption-sm-medium">{address.roadAddr}</div>
                        <div className="flex flex-col gap-y-1">
                          <div className="flex gap-x-[2px]">
                            <div className="caption-sm-medium w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                              지번
                            </div>
                            <div className="caption-sm-medium text-neutral-400">
                              {address.jibunAddr}
                            </div>
                          </div>
                          <div className="flex items-center gap-x-[2px]">
                            <div className="caption-sm-medium w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                              우편번호
                            </div>
                            <p className="caption-sm-medium text-neutral-400">{address.zipNo}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedAddress(address.roadAddr)
                        }}
                        className="caption-sm-medium h-[24px] cursor-pointer rounded-[2px] bg-purple-200 px-[6px] whitespace-nowrap"
                      >
                        선택
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            ) : results.length !== 0 ? (
              results.map((address, index) => (
                <div className="flex items-start justify-between gap-x-[14px]" key={index}>
                  <div
                    className="flex cursor-pointer flex-col gap-y-4"
                    onClick={() => console.log('선택된 주소:', address.roadAddr)}
                  >
                    <div className="caption-sm-medium">{address.roadAddr}</div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex gap-x-[2px]">
                        <div className="caption-sm-medium w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                          지번
                        </div>
                        <div className="caption-sm-medium text-neutral-400">
                          {address.jibunAddr}
                        </div>
                      </div>
                      <div className="flex items-center gap-x-[2px]">
                        <div className="caption-sm-medium w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                          우편번호
                        </div>
                        <p className="caption-sm-medium text-neutral-400">{address.zipNo}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedAddress(address.roadAddr)
                    }}
                    className="caption-sm-medium h-[24px] cursor-pointer rounded-[2px] bg-purple-200 px-[6px] whitespace-nowrap"
                  >
                    선택
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-y-2 mt-6">
                <p className="caption-md-semibold text-purple-500 ">이렇게 검색하면 좋아요</p>
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-col">
                    <p className="text-neutral-800 caption-sm-medium">도로명 + 건물번호</p>
                    <p className="caption-md-medium text-neutral-400">예) 양재대로 1300, 왕십리로 222</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-800 caption-sm-medium">동/읍/면리 + 번지</p>
                    <p className="caption-md-medium text-neutral-400">예) 백현동 532, 정자동 178-4</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
