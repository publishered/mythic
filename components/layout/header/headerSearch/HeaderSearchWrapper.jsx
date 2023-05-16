import { useState } from 'react'
import HeaderSearch from './HeaderSearch'

const HeaderSearchWrapper = () => {

   const [searchQuery, setSearchQuery] = useState('')

   const searchInputHandler = e => setSearchQuery(e.target.value)
   const clearSearchQuery = e => setSearchQuery('')

   return <HeaderSearch
      searchQuery={searchQuery}
      searchInputHandler={searchInputHandler}
      clearSearchQuery={clearSearchQuery}
   />
}

export default HeaderSearchWrapper