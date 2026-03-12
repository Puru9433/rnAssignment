import { ActivityIndicator, FlatList, RefreshControl, TextInput, View } from "react-native";
import ScreenConatiner from "../../../components/common/screenContainer";
import React, { use, useCallback, useEffect, useState } from "react";
import { getUsersData } from "../../../api/app";
import { debounce } from "lodash";
import styles from './styles'
import Header from "../../../components/common/commonHeader";
import { UserCard } from '../../../components'
import { useNavigation } from "@react-navigation/native";
import { COLORS, NAVIGATION, STRINGS } from "../../../constants";
import { CommonTextInput } from "../../../components/common";

const users = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 555-123-4567",
        address: {
            street: "123 Main St",
            suite: "Apt 101",
            city: "New York",
            zipcode: "10001"
        }
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1 555-987-6543",
        address: {
            street: "456 Park Ave",
            suite: "Suite 210",
            city: "Los Angeles",
            zipcode: "90001"
        }
    },
    {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1 555-246-8100",
        address: {
            street: "789 Oak Street",
            suite: "Apt 12B",
            city: "Chicago",
            zipcode: "60601"
        }
    },
    {
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "+1 555-369-1212",
        address: {
            street: "321 Pine Rd",
            suite: "Suite 5A",
            city: "Houston",
            zipcode: "77001"
        }
    },
    {
        name: "David Wilson",
        email: "david.wilson@example.com",
        phone: "+1 555-741-8520",
        address: {
            street: "654 Maple Ave",
            suite: "Apt 9",
            city: "Miami",
            zipcode: "33101"
        }
    },
    {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 555-123-4567",
        address: {
            street: "123 Main St",
            suite: "Apt 101",
            city: "New York",
            zipcode: "10001"
        }
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1 555-987-6543",
        address: {
            street: "456 Park Ave",
            suite: "Suite 210",
            city: "Los Angeles",
            zipcode: "90001"
        }
    },
    {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1 555-246-8100",
        address: {
            street: "789 Oak Street",
            suite: "Apt 12B",
            city: "Chicago",
            zipcode: "60601"
        }
    },
    {
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "+1 555-369-1212",
        address: {
            street: "321 Pine Rd",
            suite: "Suite 5A",
            city: "Houston",
            zipcode: "77001"
        }
    },
    {
        name: "David Wilson",
        email: "david.wilson@example.com",
        phone: "+1 555-741-8520",
        address: {
            street: "654 Maple Ave",
            suite: "Apt 9",
            city: "Miami",
            zipcode: "33101"
        }
    }
];


const HomeScreen = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState([]);
    const [pageNo, setpageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [hasMore, setHasMore] = useState();

    const LIMIT = 5;


    useEffect(() => {
        getUsers(1, true);
    }, [])

    const getUsers = async (page, isRefresh = false) => {
        if (isLoading) return;
        setIsLoading(true);
        const params = {
            page,
            limit: LIMIT
        }
        try {
            const res = await getUsersData(params);
            console.log('RESPONSE', res)
            console.log('res', res);
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
        if (hasMore && !isLoading && searchText === '') {
            const nextPage = pageNo + 1;
            setPageNo(nextPage);
            getUsers(nextPage);
        }
    };

    const onRefresh = () => {
        setIsRefreshing(true);
        setpageNo(1);
        setSearchText('');
        getUsers(1, true)
    };

    const renderEmptyComponent = () => {
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
        if (isLoading && page > 1) {
            <ActivityIndicator style={{ margin: 20 }} />
        }
    }

    const filteredData = useMemo(() => {
        if (!searchText) return userData;

        const query = searchText.toLowerCase();
        return userData.filter(user =>
            user.name?.toLowerCase().includes(query) ||
            user.email?.toLowerCase().includes(query)
        );
    }, [userData, searchText]);

    const handleSeacrh = (text) => {
        setSearchText(text);
    };

    const toUserDetailsScreen = useCallback((item) => {
        navigation.navigate(NAVIGATION.APP.HOME.USER_DETAILS, { item: item })
    }, [navigation])

    return (
        <ScreenConatiner backgroundColor="#faf5f5">
            <View style={styles.container}>
                <Header title={STRINGS.HOME_SCREEN.HEADER_TEXT} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleSeacrh}
                    placeholder={STRINGS.HOME_SCREEN.SEARCH_USER}
                />
                {!isLoading ?
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
                        keyExtractor={item => item?.id}
                        ListFooterComponent={renderFooter}
                    />}

            </View>
        </ScreenConatiner>
    )
};

export default HomeScreen;