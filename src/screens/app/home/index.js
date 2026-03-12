import { ActivityIndicator, FlatList, RefreshControl, TextInput, View } from "react-native";
import ScreenConatiner from "../../../components/common/screenContainer";
import React, { use, useCallback, useEffect, useMemo, useState } from "react";
import { getUsersData } from "../../../api/app";
import { debounce } from "lodash";
import styles from './styles'
import Header from "../../../components/common/commonHeader";
import { UserCard } from '../../../components'
import { useNavigation } from "@react-navigation/native";
import { COLORS, NAVIGATION, STRINGS } from "../../../constants";
import { CommonTextInput } from "../../../components/common";


const HomeScreen = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [hasMore, setHasMore] = useState();

    const LIMIT = 5;


    useEffect(() => {
        getUsers(1, true);
    }, [])

    const getUsers = async (page, isRefresh = false) => {
        if (isLoading && !isRefresh) return;
        setIsLoading(true);
        const params = {
            _page : page,
            _limit: LIMIT
        }
        try {
            const res = await getUsersData(params);
            console.log('---', res)
            if (res) {
                setUserData(prev => isRefresh ? res : [...prev, ...res]);
                setHasMore(res.length === LIMIT);
            }

        } catch (error) {
            console.log('ERROR', error)
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    const onLoadMore = () => {
        if (hasMore && !isLoading && searchText === '' && userData.length >= LIMIT) {
            const nextPage = pageNo + 1;
            setPageNo(nextPage);
            getUsers(nextPage);
        }
    };

    const onRefresh = () => {
        setIsRefreshing(true);
        setPageNo(1);
        setSearchText('');
        getUsers(1, true)
    };

    const renderEmptyComponent = () => {
        if (isLoading) return null;
        return (
            <View style={styles.emptyView}>
                <CommonTextInput size={22} color={COLORS.BLACK} fontWeight={700}>{STRINGS.HOME_SCREEN.NO_USER_FOUND}</CommonTextInput>
            </View>
        )
    };

    const renderItem = useCallback(({ item }) => {
        return (
            <UserCard
                item={item}
                onCardPress={() => toUserDetailsScreen(item)}
            />
        );
    }, [toUserDetailsScreen]);

    const renderFooter = () => {
        if (isLoading && pageNo > 1) {
            return <ActivityIndicator color={COLORS.PRIMARY} size='small' style={{ margin: 20 }} />
        }
    }

    const filteredData = useMemo(() => {
        if (!searchText) return userData;

        const query = searchText.toLowerCase();
        return userData?.filter(user =>
            user?.name?.toLowerCase()?.includes(query)
        );
    }, [userData, searchText]);

    const handleSeacrh = (text) => {
        setSearchText(text);
    };

    const toUserDetailsScreen = useCallback((item) => {
        navigation.navigate(NAVIGATION.APP.HOME.USER_DETAILS, { item: item })
    }, [navigation])

    return (
        <ScreenConatiner backgroundColor={COLORS.SCREEN_BACKGROUND}>
            <View style={styles.container}>
                <Header title={STRINGS.HOME_SCREEN.HEADER_TEXT} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleSeacrh}
                    placeholder={STRINGS.HOME_SCREEN.SEARCH_USER}
                />
                {isLoading && pageNo === 1 && userData.length === 0 ?
                    <View style={styles.activityIndicatorView}>
                        <ActivityIndicator color={COLORS.PRIMARY} size='large' />
                    </View> :
                    <FlatList
                        data={filteredData || []}
                        contentContainerStyle={styles.listViewStyle}
                        renderItem={renderItem}
                        ListEmptyComponent={!isLoading && (renderEmptyComponent)}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={onRefresh}
                                colors={[COLORS.PRIMARY]}
                                tintColor={COLORS.PRIMARY}
                            />
                        }
                        initialNumToRender={5}
                        onEndReached={onLoadMore}
                        onEndReachedThreshold={0.3}
                        keyExtractor={item => item?.id}
                        ListFooterComponent={renderFooter}
                    />}

            </View>
        </ScreenConatiner>
    )
};

export default HomeScreen;